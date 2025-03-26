/**
 * Author: Nicole Nielsen
 * Date: 03/22/2025
 * File Name: Assignment 1.3
 * Description: Node.js Coursework, Week 1
 */

"use strict";

// TO DO: Implement the weight conversion logic here
// Write a script to convert lbs to kgs.

function convertLbsToKg(weightInLbs) {
  if (!weightInLbs[0]) {
    console.log(`stderr: Usage: node weight-converter.js ${weightInLbs}`);
  } else if (isNaN(weightInLbs[0])) {
    console.log("Input must be a number.");
  } else {
    let weightInKg = weightInLbs[0] * 0.45359237;
    const roundedWeightInKg = weightInKg.toFixed(2);
    const roundedWeightString = roundedWeightInKg.toString();
    console.log(roundedWeightString);
  }
}

const args = process.argv.slice(2);
convertLbsToKg(args);
