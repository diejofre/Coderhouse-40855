import { Router } from "express";
import userRouter from "./users.router.js";
import toyRouter from "./toys.router.js";

const router = Router();

router.use("/users", userRouter);
router.use("/toys", toyRouter);

export default router;
