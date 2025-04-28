"use strict";

const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/roses") {
    res.write("Welcome to the Roses section!");
    res.end();
  } else if (req.url === "/orchids") {
    res.write("Welcome to the Orchids section!");
    res.end();
  } else if (req.url === "/cacti") {
    res.write("Welcome to the Cacti section!");
    res.end();
  } else {
    res.write("Welcome to the Greenhouse!");
    res.end();
  }
});

server.listen(3000, () =>
  console.log("Greenhouse Server started (http://localhost:3000/)!")
);
