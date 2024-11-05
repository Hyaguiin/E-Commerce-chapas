import express from "express";
import userRouter from "./routers/user-router";
import "./database/connection";
import productRouter from "./routers/product-routes";

const app = express();

app.use(express.json());

app.listen(3000, () => console.log("Server running on port 3000"));

app.use(userRouter);
app.use(productRouter);

app.get("/", (req, res) => {
  res.send("Olá mundo!");
});
