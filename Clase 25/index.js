import express from "express";
import config from "./config.js";
import { fork } from "child_process";

const app = express();

const PORT = config.port || 8080;

app.get("/suma", (req, res) => {
  const child = fork("./operacionCompleja.js");
  child.send("Inicio");
  child.on("message", (result) => {
    res.send("EL resultado de la operación es: " + result);
  });
});

app.get("/saludo", (req, res) => {
  res.send("Hola");
});

/* process.on("exit", (code) => {
  console.log(
    "Este código se ejecutará cuando finalice el proceso y posee el código:" +
      code
  );
});

process.on("uncaughtException", (code) => {
  console.log("Este código atrapa las excepciones");
});

process.exit(0);*/

console.log(config);

app.listen(PORT, () => {
  console.log(`Server up on PORT ${PORT}`);
});
