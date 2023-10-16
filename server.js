// Configuração Server
const express = require("express");
const PORT = 3000;
const app = express();
const apicache = require("apicache");
let cache = apicache.middleware;
app.use(cache("5 minutes"));

// Dados
const pessoas = [
  { id: 1, nome: "Marcelo" },
  { id: 2, nome: "João" },
  { id: 3, nome: "Maria" },
];

const carros = [
  { id: 1, modelo: "Fusca" },
  { id: 2, modelo: "Gol" },
  { id: 3, modelo: "Palio" },
];

const animais = [
  { id: 1, nome: "Cachorro" },
  { id: 2, nome: "Gato" },
  { id: 3, nome: "Papagaio" },
];

// Status API
app.get("/", function (req, res) {
  const status = { status: 200, message: "API On" };
  const json = JSON.stringify(status);
  res.send(json);
});

// Rotas
app.get("/pessoas", (req, res) => {
  const json = JSON.stringify(pessoas);
  res.send(json);
  return;
});

app.get("/pessoas/:id", (req, res) => {
  let id = req.params.id;
  if (id) {
    const jsonFilter = pessoas.filter((item) => item.id == id);
    res.send(jsonFilter);
    return;
  } else {
    const json = JSON.stringify([]);
    res.send(json);
    return;
  }
});

app.get("/carros", (req, res) => {
  const json = JSON.stringify(carros);
  res.send(json);
  return;
});

app.get("/carros/:id", (req, res) => {
  let id = req.params.id;
  if (id) {
    const jsonFilter = carros.filter((item) => item.id == id);
    res.send(jsonFilter);
    return;
  } else {
    const json = JSON.stringify([]);
    res.send(json);
    return;
  }
});

app.get("/animais", (req, res) => {
  const json = JSON.stringify(animais);
  res.send(json);
  return;
});

app.get("/animais/:id", (req, res) => {
  let id = req.params.id;
  if (id) {
    const jsonFilter = animais.filter((item) => item.id == id);
    res.send(jsonFilter);
    return;
  } else {
    const json = JSON.stringify([]);
    res.send(json);
    return;
  }
});

//Ouvir Server na Porta 3000
app.listen(PORT, () => {
  console.log("Server Started");
  console.log("http://localhost:" + PORT);
  console.log("");
  console.log("Routes:");
  console.log("");
  console.log("/pessoas");
  console.log("/pessoas/:id");
  console.log("");
  console.log("/carros");
  console.log("/carros/:id");
  console.log("");
  console.log("/animais");
  console.log("/animais/:id");
});
