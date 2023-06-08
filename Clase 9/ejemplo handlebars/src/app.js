import express from "express";
import handlebars from "express-handlebars";
import __dirname from "./utils.js";
import viewsRouter from "./routes/views.router.js";
const app = express();

app.engine("handlebars", handlebars.engine());
app.use("/", viewsRouter);
app.set("views", __dirname + "/views");

app.set("view engine", "handlebars");

app.use(express.static(__dirname + "/public"));

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
