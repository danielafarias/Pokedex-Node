const express = require("express");
const path = require("path");
const app = express();

const port = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var pokemon = [
  {
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
    nome: "Bulbasaur",
    numero: "001",
    tipo: "Grass",
  },
  {
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png",
    nome: "Ivysaur",
    numero: "002",
    tipo: "Grass",
  },
  {
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png",
    nome: "Venusaur",
    numero: "003",
    tipo: "Grass",
  },
];

app.get("/", (req, res) => {
  res.render("index", { titulo: "Pokédex | Node.js", pokemons: pokemon });
});

app.get("/register", (req, res) => {
  res.render("register", { titulo: "Pokédex | Registro" });
});

app.get("/details/:numero", (req, res) => {
  res.render("details", { titulo: "Pokédex | Detalhes", pokemons: pokemon.filter(i => i.numero === req.params.numero), numero: req.params.numero });
});

app.post("/pokemon", (req, res) => {
  const {
    imagem,
    nome,
    numero,
    descricao,
    tipo,
    altura,
    peso,
    habilidade,
    categoria,
  } = req.body;
  const object = {
    imagem: imagem,
    nome: nome,
    numero: numero,
    descricao: descricao,
    tipo: tipo,
    altura: altura,
    peso: peso,
    habilidade: habilidade,
    categoria: categoria,
  };

  pokemon.push(object);
  res.redirect("/");
});

app.listen(port, () =>
  console.log(`Servidor rodando em http://localhost:${port}`)
);
