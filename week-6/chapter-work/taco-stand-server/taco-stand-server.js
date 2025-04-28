"use strict";

const http = require("http");

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  const tacoStandMenu = {
    menu: ["Carne Asada Taco", "Chicken Taco", "Veggie Taco", "Fish Taco"],
  };

  res.end(JSON.stringify(tacoStandMenu));
});

server.listen(3000, "localhost", () => {
  console.log("Server running at http://localhost:3000");
});

