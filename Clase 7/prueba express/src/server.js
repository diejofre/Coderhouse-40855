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

app.use(express.json());
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

app.post("/usuarios", (req, res) => {
  const { nombre, apellido, edad, correo } = req.body;
  const id = usuarios.length + 1;
  const usuario = { id, nombre, apellido, edad, correo };
  usuarios.push(usuario);
  res.status(201).json({ message: "usuario creado", usuario });
});

app.put("/usuarios/:userId", (req, res) => {
  const { userId } = req.params;
  const { nombre, apellido, edad, correo } = req.body;
  const usuario = usuarios.find((usuario) => usuario.id == userId);
  if (usuario) {
    usuario.nombre = nombre;
    usuario.apellido = apellido;
    usuario.edad = edad;
    usuario.correo = correo;
    return res.json({ message: "usuario actualizado", usuario });
  }
  res.json({ error: "usuario no existente" });
});

app.patch("/usuarios/:userId", (req, res) => {
  const { userId } = req.params;
  const { nombre, apellido, edad, correo } = req.body;
  const usuario = usuarios.find((usuario) => usuario.id == userId);
  if (usuario) {
    usuario.nombre = nombre || usuario.nombre;
    usuario.apellido = apellido || usuario.apellido;
    usuario.edad = Number(edad) || usuario.edad;
    usuario.correo = correo || usuario.correo;
    return res.json({ message: "usuario actualizado", usuario });
  }
  res.json({ error: "usuario no existente" });
});

app.delete("/usuarios/:userId", (req, res) => {
  const { userId } = req.params;
  const usuario = usuarios.find((usuario) => usuario.id == userId);
  if (usuario) {
    const index = usuarios.indexOf(usuario);
    usuarios.splice(index, 1);
    return res.sendStatus(204);
  }
  res.json({ error: "usuario no existente" });
});

app.listen(8080, () => {
  console.log("ok");
});
