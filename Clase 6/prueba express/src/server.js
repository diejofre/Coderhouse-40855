import { log } from "console";
import express from "express";

const app = express();

const usuarios = [
  {
    id: 1,
    nombre: "susan",
    apellido: "dos",
    edad: 24,
    correo: "xxx@gmail.com",
  },
  {
    id: 2,
    nombre: "pepe",
    apellido: "dos",
    edad: 29,
    correo: "pepe@mail",
  },
];

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hola");
});

app.get("/bienvenida", (req, res) => {
  res.send("<h1 style='color: blue'>Bienvenido/a</h1>");
});

app.get("/usuarios", (req, res) => {
  res.json(usuarios);
});

app.get("/usuarios/:userId", (req, res) => {
  const userId = req.params.userId;
  const usuario = usuarios.find((usuario) => usuario.id == userId);
  if (usuario) return res.json(usuario);
  res.json({ error: "usuario no existente" });
});

app.get("/ejemploQuery", (req, res) => {
  const { nombre, apellido } = req.query;
  const usuario = usuarios.find((usuario) => usuario.nombre == nombre);
  if (usuario) return res.json(usuario);
  res.sendStatus(404);
});

app.listen(8080, () => {
  console.log("ok");
});
