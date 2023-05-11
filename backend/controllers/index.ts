import express from 'express';
import exampleController from './example'
const router = express.Router();


router.use("/example", exampleController)

export default router;