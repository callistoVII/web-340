"use strict";

const { write } = require("fs");
const { Writable } = require("stream");

let tacos = [];

const writableStream = new Writable({
  write(chunk, encoding, callback) {
    try {
      tacos.push(chunk.toString());
      callback();
    } catch (err) {
      callback(err);
    }
  },
});

writableStream.on("finish", () => {
  console.log(tacos);
});

writableStream.on("error", (err) => {
  console.error("Stream write failed: ", err);
});

try {
  writableStream.write("Beef");
  writableStream.write("Chicken");
  writableStream.end("Veggie");
} catch (err) {
  console.error("Failed to write data: ", err);
}
