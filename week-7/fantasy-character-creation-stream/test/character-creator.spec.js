/**
 * Author: Nicole Nielsen
 * Date: 05/06/2025
 * File Name: Assignment 7.2
 * Description: Node.js Coursework, Week 7
 */

"use strict";
const CharacterCreator = require("../src/character-creator");

describe("CharacterCreator", () => {
  test("processes data correctly when written to", (done) => {
    const creator = new CharacterCreator();
    creator.write("Mage,Female,Loves fire magic");
    creator.end();

    creator.on("data", (chunk) => {
      expect(chunk.toString()).toBe(
        "Class: Mage, Gender: Female, Fun Fact: Loves fire magic"
      );
      done();
    });
  });

  test("emits an error when an empty string is written", (done) => {
    const creator = new CharacterCreator();

    creator.on("error", (error) => {
      expect(error.message).toBe("Character data cannot be empty");
      done();
    });

    creator.write("");
    creator.end();
  });

  test("transforms data correctly", (done) => {
    const creator = new CharacterCreator();
    creator.write("Warrior,Male,Fearless leader");
    creator.end();

    creator.on("data", (chunk) => {
      expect(chunk.toString()).toBe(
        "Class: Warrior, Gender: Male, Fun Fact: Fearless leader"
      );
      done();
    });
  });
});
