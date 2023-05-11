import { UserService } from '../services/user.service';

export const authLogin = (req: any, res: any, next: any) => {
  if (!req.body || !req.body.username || !req.body.password) {
    req.validatedIsPassed = {
      success: false,
      message: "ต้องกรอกข้อมูลให้ครบถ้วน",
    };
    next();
  }
  req.validatedIsPassed = {
    success: true,
  };
  next();
};
export const validateRequestVerifyToken = (req: any, res: any, next: any) => {
  if (!req.body || !req.body.token) {
    req.validatedIsPassed = {
      success: false,
      message: "ไม่พบ token",
    };
    next();
  }
  req.validatedIsPassed = {
    success: true,
  };
  next();
};

export const verifyToken = async (req: any, res: any, next: any) => {
  const token = req.headers["x-api-key"];
  if (!token) {
    req.validatedIsPassed = {
      success: false,
      message: "ไม่พบ token",
    };
    res.status(400).send(req.validatedIsPassed);
    return;
  }
  const domain = new UserService();
  const tokenIsOk: any = await domain.verifyToken({ token })
  if (!tokenIsOk.success) {
    req.validatedIsPassed = {
      success: false,
      message: "token invalid",
    };
    res.status(400).send(req.validatedIsPassed);
  } else {
    next();
  }

}