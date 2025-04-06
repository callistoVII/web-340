"use strict";

const assert = require("assert");
const calculateDistance = require("../src/distance-calculator");

function testEarthToMars() {
  // TODO: Implement this function
  try {
    assert.strictEqual(calculateDistance("Earth", "Mars"), 0.5);
    console.log("Passed: testEarthToMars");
    return true;
  } catch (error) {
    console.error("Failed testEarthToMars: ${error.message}");
    return false;
  }
}

function testMercuryToJupiter() {
  try {
    assert.strictEqual(calculateDistance("Mercury", "Jupiter"), 4.8);
    console.log("Passed: testMercuryToJupiter");
    return true;
  } catch (error) {
    console.error("Failed testMercuryToJupiter: ${error.message}");
    return false;
  }
}

function testSaturnToNeptune() {
  try {
    assert.strictEqual(calculateDistance("Saturn", "Neptune"), 20.4);
    console.log("Passed: testSaturnToNeptune");
    return true;
  } catch (error) {
    console.error("Failed testSaturnToNeptune: ${error.message}");
    return false;
  }
}

// Call your test functions here
testEarthToMars();
testMercuryToJupiter();
testSaturnToNeptune();
