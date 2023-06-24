import { Router } from "express";
import { generateToken } from "../utils/jwt.utils.js";

const router = Router();

router.post("/login", (req, res) => {
  const { email, role } = req.body;

  //todo validación en db para verificar autenticación  const user = User.findOne({email})

  const userInfo = {
    email,
    role,
  };
  const token = generateToken(userInfo);

  // res.json({ message: 'Sesión iniciada', token });
  res
    .cookie("authToken", token, { maxAge: 60000, httpOnly: true })
    .json({ message: "Sesion iniciada" });
});

export default router;
