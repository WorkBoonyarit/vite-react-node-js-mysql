import express from "express";
import { ExampleService } from "../services/example.service";
import { verifyToken } from "../middlewares/auth";
import { requestExample } from '../middlewares/example';

const router = express.Router();

router.get("/", verifyToken, async (req: any, res: any, next: any) => {
  const domain = new ExampleService();
  const response = await domain.findAll();
  res.status(200).send(response);
});
router.get("/:id", verifyToken, async (req: any, res: any, next: any) => {
  const domain = new ExampleService();
  const { id } = req.params;
  const response = await domain.findOne(id);
  res.status(200).send(response);
});
router.post("/", verifyToken, requestExample, async (req: any, res: any, next: any) => {
  const domain = new ExampleService();
  const response = await domain.create(req.body);
  res.status(200).send(response);
});
router.put("/:id", verifyToken, requestExample, async (req: any, res: any, next: any) => {
  const domain = new ExampleService();
  const { id } = req.params;
  const response = await domain.update(id, req.body);
  res.status(200).send(response);
});
router.delete("/:id", verifyToken, async (req: any, res: any, next: any) => {
  const domain = new ExampleService();
  const { id } = req.params;
  const response = await domain.delete(id);
  res.status(200).send(response);
});

export default router;
