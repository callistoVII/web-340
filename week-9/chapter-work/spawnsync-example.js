"use strict";

const { spawnSync } = require("child_process");

const child = spawnSync("node", ["Superheroes.js"]);

console.log(child.stdout.toString());
