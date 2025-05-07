"use strict";

const { pipeline, Transform } = require("stream");

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

pipeline(process.stdin, upperCaser, process.stdout, (err) => {
  if (err) {
    console.error("Pipeline failed.", err);
  } else {
    console.log("Pipeline succeeded.");
  }
});
