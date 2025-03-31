/**
 * Author: Nicole Nielsen
 * Date: 03/30/2025
 * File Name: Recipes
 * Description: create a simple recipe application using Node.js CommonJS module system.
 */

"use strict";

// Define the createRecipe function
function createRecipe(ingredients) {
  // TODO: Implement this function
  let ingredients = [];

  for (let i = 0; i < process.argv.length; i++) {
    ingredients.push(i);
    console.log(ingredients); // make sure ingredients are added
  }
  // Join the array of ingredients into a string
  let ingredientsString = ingredients.join();
  return "Recipe created with ingredients: " + ingredientsString;
}

// Define the setTimer function
function setTimer(minutes) {
  // TODO: Implement this function
  // Return the formatted string with the number of minutes to be timed
  return "Timer set for" + minutes.toString();
}

// Define the quit function
function quit() {
  // TODO: Implement this function
  // Return the exit message
  return "Program exited.";
}

// TODO: Export the functions
module.exports = {
  createRecipe,
  setTimer,
  quit,
};
