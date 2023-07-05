import { userService } from "../services/index.js";

const getUsers = (req, res) => {
  const users = userService.getAllUsers();
  res.send(users);
};

const saveUser = (req, res) => {
  const { id, first_name, last_name, email } = req.body;
  if (!id || !first_name || !last_name || !email)
    return res.status(400).send("Datos faltantes");
    const newUser = { id, first_name, last_name, email }
    const user = userService.createUser(newUser)
  res.status(201).send(user);
};

export default {
  getUsers,
  saveUser,
};
