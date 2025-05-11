"use strict";

const { writeFile } = require("fs");
const { join } = require("path");

const file = join(__dirname, "villains.txt");

const villains = [
  "Lex Luthor",
  "Joker",
  "Black Adam",
  "Deathstroke",
  "Darkseid",
];

async function writeVillains() {
  try {
    await writeFile(file, villains.join("\n"));
    console.log("Villains written successfully!");
  } catch (err) {
    console.error("Error writing villains!", err);
  }
}

writeVillains(); // call the function
