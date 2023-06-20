import express from "express";
import session from "express-session";

const app = express();

app.use(
  session({
    secret: "CoderSecret",
    resave: true,
    saveUninitialized: true,
  })
);

app.get("/session", (req, res) => {
  if (req.session.counter) {
    req.session.counter++;
    res.send(`Usted a ingresado ${req.session.counter} veces`);
  } else {
    req.session.counter = 1;
    res.send("Bienvenido/a");
  }
});

app.get("/login", (req, res) => {
  const { username, password } = req.query;
  if (username != "pepe" && password != "pepepass") {
    return res.send("Login failed");
  }
  req.session.user = username;
  req.session.admin = true;
  res.send("Login ok");
});

function auth(req, res, next) {
  if (req.session?.user == "pepe" && req.session?.admin) {
    return next();
  }
  res.status(401).send("Error de autorización");
}

app.get("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (!err) res.send("Logout OK");
    else res.send({ status: "error", body: err });
  });
});

app.get("/privada", auth, (req, res) => {
  res.send("Estás adentro");
});

app.listen(8080, () => {
  console.log("Server up on port 8080");
});
