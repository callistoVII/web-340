/**
 * Author: Nicole Nielsen
 * Date: 05/18/2025
 * File Name: Assignment 9.2
 * Description: Node.js Coursework, Week 9
 */

const GameCharacters = require("../src/game-characters");

describe("GameCharacters", () => {
  let gameCharacters;

  beforeEach(() => {
    gameCharacters = new GameCharacters("game-characters-data.js");
  });
  // Return character data
  test("should return character data", (done) => {
    gameCharacters.getCharacters((err, data) => {
      expect(err).toBeNull();
      expect(data.length).toBeGreaterThan(0);
      expect(data[0]).toHaveProperty("class");
      done();
    });
  });
  // If script missing, log error msg
  test("should handle script not found error", (done) => {
    const missingCharacters = new GameCharacters("missing-script.js");
    missingCharacters.getCharacters((err, data) => {
      expect(err).not.toBeNull();
      expect(data).toBeNull();
      done();
    });
  });
  // If script fails, log error msg
  test("should handle script failure", (done) => {
    const failingCharacters = new GameCharacters("failing-script.js");
    failingCharacters.getCharacters((err, data) => {
      expect(err).toContain("Failed to load character data.");
      expect(data).toBeNull();
      done();
    });
  });
});
