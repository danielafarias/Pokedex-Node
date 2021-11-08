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
    descricao: "There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.",
    numero: "001",
    tipo: "Grass",
    altura: "0.7",
    peso: "6.9",
    categoria: "Seed",
    habilidade: "Overgrow",
  },
  {
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png",
    nome: "Ivysaur",
    descricao: "When the bulb on its back grows large, it appears to lose the ability to stand on its hind legs.",
    numero: "002",
    tipo: "Grass",
    altura: "1.0",
    peso: "13.0",
    categoria: "Seed",
    habilidade: "Overgrow",
  },
  {
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png",
    nome: "Venusaur",
    descricao: "Its plant blooms when it is absorbing solar energy. It stays on the move to seek sunlight.",
    numero: "003",
    tipo: "Grass",
    altura: "2.0",
    peso: "100.0",
    categoria: "Seed",
    habilidade: "Overgrow",
  },
];

let message = "";

app.get("/", (req, res) => {
  res.render("index", { titulo: "Pokédex | Node.js", pokemons: pokemon, message });
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
  message = "Seu pokemon foi capturado com sucesso!";
  pokemon.push(object);
  res.redirect("/");
});

app.listen(port, () =>
  console.log(`Servidor rodando em http://localhost:${port}`)
);
