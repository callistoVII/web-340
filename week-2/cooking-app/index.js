/**
 * Author:
 * Date:
 * File Name:
 * Description:
 */

"use strict";

// TODO: Import your module using require
const { createRecipe, setTimer, quit } = require("./recipes");

// TODO: Implement your CLI program here
let recipesModule = require("./recipes");

const args = process.argv.slice(2);
let ingredientsString = recipesModule.createRecipe(args);
console.log(ingredientsString);

let minutesSetToString = recipesModule.setTimer(args);

recipesModule.quit();
