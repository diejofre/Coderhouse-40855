import express from "express";
import cookieParser from "cookie-parser";

const app = express();

app.use(cookieParser("CoderSecret"));

app.get("/", (req, res) => {
  res.send("Hola mundo!");
});

app.get("/setCookie", (req, res) => {
  res
    .cookie("CoderCookie", "Esta es una cookie muy poderosa", {
      maxAge: 100000,
    })
    .send("Cookie");
});

app.get("/getCookies", (req, res) => {
  res.send(req.cookies);
});

app.get("/setSignedCookie", (req, res) => {
  res
    .cookie("SignedCookie", "Esta es una cookie muy poderosa", {
      maxAge: 100000,
      signed: true,
    })
    .send("Cookie");
});

app.get("/getSignedCookie", (req, res) => {
  res.send(req.signedCookies);
});

app.get("/deleteCookie", (req, res) => {
  res.clearCookie("CoderCookie").send("Cookie removed");
});

app.listen(8080, () => {
  console.log("Server up on port 8080");
});
