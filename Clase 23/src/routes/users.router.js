import BaseRouter from "./router.js";

export default class UserRouter extends BaseRouter {
  init() {
    this.get("/", ["USER"], (req, res) => {
      res.sendSuccess("Usuario");
    });

    this.get("/current", ["USER", "USER_PREMIUM"], (req, res) => {
      res.sendSuccess(req.user);
    });
  }
}
