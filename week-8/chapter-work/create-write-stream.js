"use strict";

const { createWriteStream } = require("fs");
const { join } = require("path");

const file = join(__dirname, "marvel_superheroes.txt"); // marvel_superheroes.txt is in the same directory as this file

const stream = createWriteStream(file, { encoding: "utf8" });

stream.write("Iron Man\n");
stream.write("Spider-Man\n");
stream.write("Captain America\n");
stream.write("Thor\n");
stream.write("Black Widow\n");
stream.write("Hulk\n");

stream.end(); // close the stream

stream.on("finish", () => {
  console.log("Finished writing Marvel superheroes to file."); // this will be printed last
});

stream.on("error", (err) => {
  console.error("An error occurred while writing to the file.");
});
