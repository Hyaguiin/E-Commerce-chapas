import express from "express";
import userRouter from "./routers/user-router";
import "./database/connection";

const app = express();

app.use(express.json());

app.listen(3000, () => console.log("Server running on port 3000"));

app.use(userRouter);

app.get("/", (req, res) => {
  res.send("Olá mundo!");
});
