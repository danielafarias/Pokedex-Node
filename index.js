const express = require("express");
const path = require("path");
const Pokemon = require("./models/pokemons");

const app = express();

const port = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var pokemon = [
  {
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
    name: "Bulbasaur",
    description: "There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.",
    number: "001",
    type: "Grass",
    height: "0.7",
    weight: "6.9",
    category: "Seed",
    hability: "Overgrow",
  },
  {
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png",
    name: "Ivysaur",
    description: "When the bulb on its back grows large, it appears to lose the ability to stand on its hind legs.",
    number: "002",
    type: "Grass",
    height: "1.0",
    weight: "13.0",
    category: "Seed",
    hability: "Overgrow",
  },
  {
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png",
    name: "Venusaur",
    description: "Its plant blooms when it is absorbing solar energy. It stays on the move to seek sunlight.",
    number: "003",
    type: "Grass",
    height: "2.0",
    weight: "100.0",
    category: "Seed",
    hability: "Overgrow",
  },
];

let message = "";

app.get("/", (req, res) => {
  res.render("index", { titulo: "Pokédex | Node.js", pokemons: pokemon, message });
});

app.get("/register", (req, res) => {
  res.render("register", { titulo: "Pokédex | Registro" });
});

app.get("/details/:number", (req, res) => {
  res.render("details", { titulo: "Pokédex | Detalhes", pokemons: pokemon.filter(i => i.number === req.params.number), number: req.params.number });
});

app.post("/pokemon", (req, res) => {
  const {
    image,
    name,
    number,
    description,
    type,
    height,
    weight,
    hability,
    category,
  } = req.body;
  const object = {
    image: image,
    name: name,
    number: number,
    description: description,
    type: type,
    height: height,
    weight: weight,
    hability: hability,
    category: category,
  };
  message = "Seu pokemon foi capturado com sucesso!";
  pokemon.push(object);
  res.redirect("/");
});

app.listen(port, () =>
  console.log(`Servidor rodando em http://localhost:${port}`)
);


// Rotas para serem usadas com SQL

/*
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

*/