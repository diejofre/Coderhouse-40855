import { Router } from "express";
import { userModel } from "../models/user.model.js";

const router = Router();

router.get("/", async (req, res) => {
  try {
    let users = await userModel.find();
    res.json({ result: "success", payload: users });
  } catch (err) {
    console.log("Cannot get users:" + err);
  }
});

router.get("/:uid", async (req, res) => {
  let { uid } = req.params;
  try {
    let user = await userModel.findById(uid);
    res.json({ result: "success", payload: user });
  } catch (err) {
    console.log("Cannot get user:" + err);
  }
});

router.post("/", async (req, res) => {
  const { first_name, last_name, email } = req.body;
  if (!first_name || !last_name || !email)
    return res.json({ result: "error", error: "Valores imcompletos" });
  try {
    let result = await userModel.create({
      first_name,
      last_name,
      email,
    });
    res.status(201).json({ result: "success", payload: result });
  } catch (err) {
    console.log("Cannot create user:" + err);
  }
});

router.put("/:uid", async (req, res) => {
  let { uid } = req.params;
  let userToReplace = req.body;
  if (
    !userToReplace.first_name ||
    !userToReplace.last_name ||
    !userToReplace.email
  )
    return res.json({ result: "error", error: "Valores imcompletos" });
  try {
    let result = await userModel.updateOne({ _id: uid }, userToReplace);
    res.json({ result: "success", payload: result });
  } catch (err) {
    console.log("Cannot update user:" + err);
  }
});

router.delete("/:uid", async (req, res) => {
  let { uid } = req.params;
  try {
    let result = await userModel.deleteOne({ _id: uid });
    res.json({ result: "success", payload: result });
  } catch (err) {
    console.log("Cannot delete user:" + err);
  }
});

export default router;
