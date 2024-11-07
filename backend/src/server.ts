import express from "express";
import userRouter from "./routers/user-router";
import "./database/connection";
import productRouter from "./routers/product-routes";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3000, () => console.log("Server running on port 3000"));

app.use(productRouter);
app.use(userRouter);

app.get("/", (req, res) => {
  res.send("Olá mundo!");
});
