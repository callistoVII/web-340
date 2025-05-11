"use strict";

const {readFileSync, read} = require("fs");
const {join} = require("path");

const file = join(__dirname, "superheroes.txt");

const superheroes = readFileSync(file, "utf-8");

console.log(superheroes);

