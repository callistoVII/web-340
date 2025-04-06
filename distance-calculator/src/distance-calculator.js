"use strict";

// A module to calculate distance between two planets in AU
// planet distances sourced from Planet Distance Chart avail from www.jpl.nasa.gov/_edu/pdfs/ssbeads_answerkey.pdf
const planetDistances = {
  Mercury: 0.4,
  Venus: 0.7,
  Earth: 1.0,
  Mars: 1.5,
  Jupiter: 5.2,
  Saturn: 9.6,
  Uranus: 19.2,
  Neptune: 30.0,
  Pluto: 39.5, // using the average distance of Pluto. Technically, Pluto is a dwarf planet.
};

function calculateDistance(planet1, planet2) {
  // TODO: Implement this function
  const distance1 = planetDistances[planet1];
  const distance2 = planetDistances[planet2];

  if (distance1 === undefined || distance2 === undefined) {
    throw new Error("Invalid Planet Name provided.");
  }

  return Math.abs(distance1 - distance2);
}

module.exports = calculateDistance;
