import express, { json, urlencoded } from "express";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import router from "./router/index.js";
import initializePassport from "./config/passport.config.js";
import passport from "passport";

const port = 3000;

const app = express();

app.use(json());
app.use(urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cookieParser());
app.use(morgan("dev"));
initializePassport();
app.use(passport.initialize());

router(app);

app.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
