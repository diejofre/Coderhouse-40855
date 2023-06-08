import { Router } from "express";

const router = Router();

const foods = [
  {
    name: "Pizza",
    price: 12,
  },
  {
    name: "Hamburger",

    price: 8,
  },
];

router.get("/", (req, res) => {
  const user = {
    name: "John",
    lastname: "Doe",
    role: "admin",
  };

  res.render("index", {
    user,
    style: "index.css",
    isAdmin: user.role === "admin",
    foods,
  });
});

export default router;
