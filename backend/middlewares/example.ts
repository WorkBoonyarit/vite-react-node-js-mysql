export const requestExample = (req: any, res: any, next: any) => {
  if (!req.body || !req.body.first_name || !req.body.last_name || !req.body.email || !req.body.gender || !req.body.ip_address) {
    req.validatedIsPassed = {
      success: false,
      message: "ต้องกรอกข้อมูลให้ครบถ้วน",
    };
    res.status(400).send(req.validatedIsPassed);
  } else {
    next();
  }
};
