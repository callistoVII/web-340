"use strict";

let gardener = {
  name: "Beth",
  location: "Herb Garden",
};

function returnToHouse() {
  console.log(`${gardener.name} has finished tending to ${gardener.location}.`);
  setTimeout(() => {
    console.log(`${gardener.name} returns to the house.`);
    cleanTools();
  }, 4000);
}

function cleanTools() {
  console.log(`${gardener.name} is cleaning her tools.`);
}

process.on("beforeExit", () => {
  console.log(`${gardener.name} is going to rest.`);
});

setTimeout(returnToHouse, 2000);
