import BaseRouter from "./router.js";
import jwt from "jsonwebtoken";

export default class SessionsRouter extends BaseRouter {
  init() {
    this.post("/login", ["PUBLIC"], (req, res) => {
      //Simulamos que el usuario sí se logueó bien
      const user = {
        email: req.body.email,
        role: req.body.role,
      };
      const token = jwt.sign(user, "coderSecret");
      res.sendSuccess({ token });
    });

    this.get("/current", ["USER", "ADMIN"], (req, res) => {
      res.sendSuccess({ user: req.user });
    });
  }
}
