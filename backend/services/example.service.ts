import { exampleModel } from "../models/example.models";
export class ExampleService {
  async findAll() {
    try {
      const data: any = await exampleModel.findAll({ raw: true })
      if (!data) return { success: false, message: "ไม่พบข้อมูล" };

      return {
        success: true, data
      };

    } catch (err) {
      return err;
    }
  }
  async findOne(id: string) {
    try {
      const data: any = await exampleModel.findOne({ where: { id }, raw: true })
      if (!data) return { success: false, message: "ไม่พบข้อมูล" };

      return {
        success: true, data
      };

    } catch (err) {
      return err;
    }
  }
  async create(req: any) {
    try {
      const data: any = await exampleModel.create(req)
      if (!data) return { success: false, message: "เพิ่มข้อมูลไม่สำเร็จ" };

      return {
        success: true, data
      };

    } catch (err) {
      return err;
    }
  }
  async update(id: string, req: any) {
    try {
      const data: any = await exampleModel.update(req, { where: { id } });
      if (!data) return { success: false, message: "แก้ไขไม่สำเร็จ" };

      return {
        success: true, message: "แก้ไขสำเร็จ"
      };

    } catch (err) {
      return err;
    }
  }
  async delete(id: string) {
    try {
      const data: any = await exampleModel.destroy({ where: { id } });
      if (!data) return { success: false, message: "ลบไม่สำเร็จ" };

      return {
        success: true, message: "ลบสำเร็จ"
      };

    } catch (err) {
      return err;
    }
  }

}
