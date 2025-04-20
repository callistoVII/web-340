/**
 * Author: Nicole Nielsen
 * Date:   04/20/2025
 * File Name: Pie Baker
 * Description: A module that simulates a simple pie baker
 */

"use strict";

function bakePie(pieType, ingredients) {
  // Your code here
  // Essential ingredients needed to bake a pie
  const essentialIngredients = ["flour", "sugar", "butter"];

  // Check if all ingredients are accounted for
  const missingIngredients = essentialIngredients.filter(
    (item) => !ingredients.includes(item)
  );

  // If there are missing ingredients, issue warning and exit process
  if (missingIngredients.length > 0) {
    console.log("Warning: Missing essential ingredients.");
    process.exit(1);
  }
  return `The ${pieType} pie was successfully baked!`;
}

module.exports = { bakePie };
