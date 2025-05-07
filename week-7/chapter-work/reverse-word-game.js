"use strict";

const { pipeline, Transform } = require("stream");

class ReverseString extends Transform {
  constructor() {
    super();
  }

  _transform(chunk, encoding, callback) {
    this.push(chunk.toString().split("").reverse().join(""));
    callback();
  }
}

const reverser = new ReverseString();

pipeline(process.stdin, reverser, process.stdout, (err) => {
  if (err) {
    console.error("Pipeline failed.", err);
  } else {
    console.log("Pipeline succeeded.");
  }
});
