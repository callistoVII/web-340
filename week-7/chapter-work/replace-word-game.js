"use strict";

const { pipeline, Transform } = require("stream");

class ReplaceWord extends Transform {
  constructor() {
    super();
  }

  _transform(chunk, encoding, callback) {
    const inputString = chunk.toString();
    const outputString = inputString.replace(/superhero/g, "villain");
    this.push(outputString);
    callback();
  }
}

const replacer = new ReplaceWord();

pipeline(process.stdin, replacer, process.stdout, (err) => {
  if (err) {
    console.error("Pipeline failed.", err);
  } else {
    console.log("Pipeline succeeded.");
  }
});
