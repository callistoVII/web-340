"use strict";

const { Writable } = require("stream");

const writableStream = new Writable({
  write(chunk, encoding, callback) {
    console.log(chunk.toString());
    callback();
  },
});

writableStream.write("Beef");
writableStream.write("Chicken");
writableStream.end("Veggie");
