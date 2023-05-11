import { userModel } from "../models/users.model";
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { Config } from "../bootstrapConfig";
export class UserService {
  async login(body: any) {
    const { username, password } = body;
    try {
      const usersData: any = await userModel.findOne({ where: { username }, attributes: ['username', 'password'], raw: true })
      if (!usersData) return { success: false, message: "ไม่พบชื่อผู้ใช้งานหรือรหัสผ่านไม่ถูกต้อง" };
      const passwordIsMatch = await bcrypt.compare(password, usersData.password);
      if (passwordIsMatch) {
        const token = jwt.sign({ username: usersData.username }, Config.jwtSecret, { algorithm: 'HS256', expiresIn: Config.jwtLife });
        await userModel.update({ token }, { where: { username: usersData.username } })
        return { success: passwordIsMatch, data: { token } }
      } else {
        return { success: false, message: "ไม่พบชื่อผู้ใช้งานหรือรหัสผ่านไม่ถูกต้อง" };
      }

    } catch (err) {
      return err;
    }
  }
  async register(body: any) {
    const { username, password } = body;
    try {
      const usersData: any = await userModel.findOne({ where: { username }, attributes: ['username'], raw: true })
      if (usersData) return { success: false, message: "มีผู้ใช้งานนี้อยู่แล้ว" };

      const hashPassword = await bcrypt.hash(password, 10);
      const token = jwt.sign({ username }, Config.jwtSecret, { algorithm: 'HS256', expiresIn: Config.jwtLife });
      const bodyInsert = {
        ...body,
        password: hashPassword,
        token
      }
      await userModel.create(bodyInsert)
      return { success: true, message: "สมัครสมาชิกสำเร็จ" }

    } catch (err) {
      return err;
    }
  }

  async verifyToken(body: any) {
    const { token } = body;

    try {
      jwt.verify(token, Config.jwtSecret);
      return { success: true, message: "ยังไม่หมดอายุ" };
    } catch (error) {
      return { success: false, message: `${error}` };

    }
  }
}
