"use strict";

process.on("message", (hero) => {
  console.log("This process will handle:", hero);
});

process.send("done");
