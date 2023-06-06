import { createServer } from "http";

const server = createServer((req, res) => {
  res.end("Mi primer Hola Mundo desde backend!!!");
});

server.listen(8080, () => {
  console.log("Servidor escuchando en el puerto 8080");
});
