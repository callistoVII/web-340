/**
 * Author: Nicole Nielsen
 * Date: 05/10/2025
 * File Name: Assignment 8.2
 * Description: Node.js Coursework, Week 8
 */

"use strict";

const fs = require("fs");
const path = require("path");
const { saveCharacter, readCharacter } = require("../src/character-creation");

const characterFile = path.join(__dirname, "../src/characters.json");

describe("Character Creation File Operations", () => {
  beforeEach(async () => {
    await fs.promises.writeFile(characterFile, JSON.stringify({})); // Reset file before each test
  });

  test("should write character data to a file", async () => {
    const characterData = {
      class: "Mage",
      gender: "Female",
      trait: "Has a pet dragon",
    };

    await saveCharacter(characterData);

    const data = await fs.promises.readFile(characterFile, "utf8");
    expect(JSON.parse(data)).toEqual(characterData);
  });

  test("should read character data from a file", async () => {
    const characterData = {
      class: "Rogue",
      gender: "Male",
      trait: "Always carries a lucky coin",
    };
    await fs.promises.writeFile(characterFile, JSON.stringify(characterData));

    const result = await readCharacter();
    expect(result).toEqual(characterData);
  });

  test("should handle errors when reading an empty file", async () => {
    await fs.promises.writeFile(characterFile, ""); // Write empty content to simulate failure

    await expect(readCharacter()).rejects.toThrow();
  });
});
