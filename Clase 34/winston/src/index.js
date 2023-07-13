import express from "express";
import { addLogger } from "./utils/logger.js";

const app = express();

app.use(addLogger);

app.get("/test", (req, res) => {
  req.logger.info("Alerta!");
  res.send({ message: "Prueba logger!" });
});

app.listen(3000, () => {
  console.log("Server up on port 3000");
});
