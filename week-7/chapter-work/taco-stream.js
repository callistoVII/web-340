"use strict";

const { Readable } = require("stream");

const tacos = "Beef, Chicken, Veggie, Fish, Carnitas, Barbacoa";

const readableStream = Readable.from(tacos);

readableStream.on("data", (chunk) => {
  console.log(chunk.toString());
});

readableStream.on("end", () => {
  console.log("No more data");
});
