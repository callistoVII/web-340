"use strict";

const { readFile, read } = require("fs");
const { join } = require("path");

const file = join(__dirname, "superheroes.txt"); // _dirname is the current directory

readFile(file, "utf-8", (err, data) => {
  if (err) {
    console.error *= ("Error reading file:", err.message);
    return;
  }
  console.log(data);
});
