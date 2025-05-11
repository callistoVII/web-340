"use strict";

const { createReadStream, createWriteStream } = require("fs");
const { Transform } = require("stream");
const { pipeline } = require("stream/promises");
const { join } = require("path");

const translations = {
  hello: "hola",
  world: "mundo",
  programming: "programar",
  is: "es",
  fun: "divertido",
};

const transformStream = new Transform({
  transform(chunk, encoding, callback) {
    const transformedChunk = chunk
      .toString()
      .split("")
      .map((word) => translations[word] || word)
      .join();

    callback(null, transformedChunk);
  },
});

async function translateFile() {
  const readStream = createReadStream(join(__dirname, "english.txt"));
  const writeStream = createWriteStream(join(__dirname, "spanish.txt"));

  try {
    await pipeline(readStream, transformStream, writeStream);
    console.log("File has been translated.");
  } catch (err) {
    console.error("An error has occurred:", err);
  }
}

translateFile();
