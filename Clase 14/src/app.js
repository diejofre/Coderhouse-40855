import express from "express";
import userRouter from "./routes/user.router.js";
import mongoose from "mongoose";

const app = express();

mongoose.connect(
  "mongodb+srv://diegojofre:coder@cluster0.92ntnpd.mongodb.net/?retryWrites=true&w=majority"
);
app.use(express.json());
app.use("/api/users", userRouter);

app.listen(8080, () => {
  console.log("Server up on PORT 8080");
});
