import express from "express";
import { generateToken, authToken } from "./utils.js";

const app = express();

const PRIVATE_KEY = "secret";

const users = [];

app.use(express.json());

app.get("/", (req, res) => {
  return res.send("Hello world");
});

app.post("/register", (req, res) => {
  const { name, email, password } = req.body;
  const exists = users.find((user) => user.email === email);
  if (exists)
    return res
      .status(400)
      .send({ status: "error", error: "User already exists" });
  const user = { name, email, password };
  users.push(user);

  const access_token = generateToken(user, PRIVATE_KEY);
  return res.send({ status: "success", access_token });
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  const user = users.find(
    (user) => user.email === email && user.password === password
  );
  if (!user)
    return res
      .status(400)
      .send({ status: "error", error: "Invalid credentials" });
  const access_token = generateToken(user);
  return res.send({ status: "success", access_token });
});

app.get("/current", authToken, (req, res) => {
  return res.send({ status: "success", payload: req.user });
});

app.listen(3000, () => console.log("Server running on port 3000"));
