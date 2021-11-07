const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  const devList = ["Backend", "Frontend", "Fullstack"];
  const analyticsList = ["Engenharia de dados", "Ciência de dados"];
  res.render("index", { titulo: "Pokédex | Node.js", devList: devList, analyticsList: analyticsList });
});

app.get("/register", (req, res) => {
  res.render("register", { titulo: "Pokédex | Registro" });
});

app.post("/pokemon", (req, res) => {
  const { nome, numero, descricao, tipo, altura, peso, habilidade, categoria } = req.body;
  res.send({ nome: nome, numero: numero, descricao: descricao, tipo: tipo, altura: altura, peso: peso, habilidade: habilidade, categoria: categoria });
});

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded());


app.listen(port, () => console.log(`Servidor rodando em http://localhost:${port}`));