import { Router } from "express";
import authorization from "../middlewares/authorization.middlewares.js";
import passportCall from "../utils/passportCall.utils.js";

const router = Router();

router.get(
  "/private",
  passportCall("jwt"),
  authorization("admin"),
  (req, res) => {
    res.json({ message: "Si ves esto es porque eres admin!!!!!!" });
  }
);

export default router;
