"use strict";

const { Transform } = require("stream");

class EchoManPower extends Transform {
  constructor() {
    super();
  }

  _transform(chunk, encoding, callback) {
    const sentence = chunk.toString();
    const reversedSentence = sentence.split("").reverse().join("");
    this.push(reversedSentence);
    callback();
  }
}

const echoManPower = new EchoManPower();

echoManPower.on("data", (chunk) => {
  console.log(`EchoMan repeats: ${chunk.toString()}`);
});

echoManPower.write(
  "I am EchoMan, I am here to help you with your problems and to save the world!"
);
