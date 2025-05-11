"use strict";

const { writeFileSync } = require("fs");
const { join } = require("path");

const file = "superheroes.json";

const superheroes = [
  "Superman",
  "Batman",
  "Wonder Woman",
  "Flash",
  "Green Lantern",
  "Aquaman",
];

const data = JSON.stringify(superheroes, null, 2);

writeFileSync(file, data, "utf-8");

console.log("Superheroes written to file.");
