/**
 * Author: Nicole Nielsen
 * Date: 05/10/2025
 * File Name: Assignment 8.2
 * Description: Node.js Coursework, Week 8
 */

"use strict";

const fs = require("fs");
const path = require("path");
const characterFile = path.join(__dirname, "characters.json");

const saveCharacter = async (character) => {
  await fs.promises.writeFile(characterFile, JSON.stringify(character));
};

const readCharacter = async () => {
  try {
    const data = await fs.promises.readFile(characterFile, "utf8");
    if (!data.trim()) throw new Error("File is empty or unreadable");
    return JSON.parse(data);
  } catch (error) {
    throw new Error("Error reading character data");
  }
};

module.exports = { saveCharacter, readCharacter };
