import cluster from "cluster";
import { cpus } from "os";
import express from "express";

const numeroDeNucleos = cpus().length;
console.log("numeroDeNucleos", numeroDeNucleos);

if (cluster.isPrimary) {
  console.log("Proceso primario, generando workers", process.pid);
  for (let i = 0; i < numeroDeNucleos; i++) {
    cluster.fork();
  }
} else {
  console.log("Soy un worker ", process.pid);

  const app = express();

  app.get("/", (req, res) => {
    console.log(`Respuesta del worker ${process.pid}`);
    res.json({ message: `Respuesta del worker ${process.pid}` });
  });

  app.get("/operacionsencilla", (req, res) => {
    let suma = 0;
    for (let i = 0; i < 1000000; i++) {
      suma += i;
    }
    res.json({
      status: "success",
      message: `El worker ${process.pid} ha atendido esta petición, el resultado es ${suma}`,
    });
  });

  app.get("/operacioncompleja", (req, res) => {
    let suma = 0;
    for (let i = 0; i < 5e7; i++) {
      suma += i;
    }
    res.json({
      status: "success",
      message: `El worker ${process.pid} ha atendido esta petición, el resultado es ${suma}`,
    });
  });

  app.listen(3000, () => {
    console.log(`Server running at port: 3000 con el worker ${process.pid}`);
  });
}
