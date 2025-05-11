"use strict";

const { readFile } = require("fs");
const { join } = require("path");

const file = join(__dirname, "superheroes.txt");

async function readSuperheroes() {
  try {
    const data = await readFile(file, "utf-8");
    console.log(data); // print the file contents
  } catch {
    console.error("Error reading file.");
  }
}

readSuperheroes();
