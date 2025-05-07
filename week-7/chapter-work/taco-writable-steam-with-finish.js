"use strict";

const { Writable } = require("stream");

let tacos = [];

const writableStream = new Writable({
  write(chunk, encoding, callback) {
    tacos.push(chunk.toString());
    callback();
  },
});

writableStream.on("finish", () => {
  console.log(tacos);
});

writableStream.write("Beef");
writableStream.write("Chicken");
writableStream.end("Veggie");
