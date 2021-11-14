const express = require("express");
const path = require("path");
const app = express();
const Pokemon = require("./models/pokemons");

const port = process.env.PORT || 3000;
require('dotenv').config();
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let message = "";

app.get("/", async (req, res) => {
  const pokemons = await Pokemon.findAll();
  
  res.render("index", { titulo: "Pokédex | Node.js", pokemons, message });
});

app.get("/register", (req, res) => {
  res.render("register", { titulo: "Pokédex | Registro" });
});

app.get("/details/:number", async (req, res) => {
  const pokemons = await Pokemon.findByPk(req.params.number);
 
  res.render("details", { titulo: "Pokédex | Detalhes", pokemons, message });
});

app.post("/pokemon", async (req, res) => {
  const { number, image, name, description, type, weight, height, category, hability } = req.body;
  
  try {
    await Pokemon.create({
      number, 
      image, 
      name, 
      description, 
      type, 
      weight, 
      height, 
      category, 
      hability,
    });

  message = "Seu pokemon foi capturado com sucesso!";
  res.redirect("/");
  } catch (err) {
    console.log(err);
    res.render("register", {
      titulo: "Pokédex | Registro",
    });
  }
});

app.listen(port, () =>
  console.log(`Servidor rodando em http://localhost:${port}`)
);
