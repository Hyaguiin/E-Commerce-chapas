import express from "express";

const app = express();

app.listen(3000, () => console.log("Server rodando na porta 3000"));

app.get("/", (req, res) => {
  res.send("Olá mundo!");
});