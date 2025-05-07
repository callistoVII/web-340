"use strict";

const { Readable } = require("stream");

const tacos = ["Beef", "Chicken", "Veggie", "Fish", "Carnitas", "Barbacoa"];
let index = 0;

const readableStream = new Readable({
  read() {
    if (index === tacos.length) {
      this.push(null);
    } else {
      this.push(tacos[index]);
      index++;
    }
  },
});

readableStream.on("data", (chunk) => {
  console.log(chunk.toString());
});
