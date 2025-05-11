"use strict";

const { create } = require("domain");
const { createReadStream } = require("fs");
const { join } = require("path");

const file = join(__dirname, "superheroes.txt"); // superheroes.txt is in the same directory as this file

const readStream = createReadStream(file, { encoding: "utf-8" });

readStream.on("data", (chunk) => {
  console.log(chunk);
});

readStream.on("error", (err) => {
  console.error("An error occurred while reading the file.", err);
});
