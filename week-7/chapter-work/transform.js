"use strict";

const { Transform } = require("stream");

const simpleTranslation = {
  hello: "hola",
  world: "mundo",
  programming: "programar",
  is: "es",
  fun: "divertido",
};

class EnglishToSpanishTranslator extends Transform {
  constructor() {
    super();
  }

  _transform(chunk, encoding, callback) {
    const words = chunk.toString().split("");
    const translatedWords = words.map(
      (word) => simpleTranslation[word.toLowerCase()] || word
    );
    this.push(translatedWords.join(""));
    callback();
  }
}

const translator = new EnglishToSpanishTranslator();

translator.on("data", (chunk) => {
  console.log(`Your translated text: ${chunk.toString()}`);
});

translator.write("hello world programming is fun");
