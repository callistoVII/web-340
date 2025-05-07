"use strict";

const { Transform } = require("stream");

class ToUpperCase extends Transform {
  constructor() {
    super();
  }

  _transform(chunk, encoding, callback) {
    this.push(chunk.toString().toUpperCase());
    callback();
  }
}

const upperCaser = new ToUpperCase();

process.stdin.pipe(upperCaser).pipe(process.stdout);
