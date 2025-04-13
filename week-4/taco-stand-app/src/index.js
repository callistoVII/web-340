/**
 * Author: Nicole Nielsen
 * Date: 04/12/2025
 * File Name: Assignment 4.2
 * Description: Node.js Coursework, Week 4
 */

"use strict";

const readline = require("readline");
const TacoStandEmitter = require("./taco-stand");

const tacoStand = new TacoStandEmitter();

tacoStand.on("serve", (customer) => {
  console.log(`Taco Stand serves: ${customer}.`);
});

tacoStand.on("prepare", (taco) => {
  console.log(`Taco stand prepares: ${taco} taco.`);
});

tacoStand.on("rush", (rush) => {
  console.log(`Taco Stand handles rush: ${rush}.`);
});

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (input) => {
  const [command, ...args] = input.split(" ");
  if (command === "serve") {
    tacoStand.serveCustomer(args.join(" "));
  } else if (command === "prepare") {
    tacoStand.prepareTaco(args.join(" "));
  } else if (command === "rush") {
    tacoStand.handleRush(args.join(" "));
  } else {
    console.log("Unknown Command.");
  }
});

console.log(
  `Enter a Command: "serve <name>", "prepare <taco>", or "rush <event>"`
);
