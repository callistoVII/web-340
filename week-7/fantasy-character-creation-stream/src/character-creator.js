/**
 * Author: Nicole Nielsen
 * Date: 05/06/2025
 * File Name: Assignment 7.2
 * Description: Node.js Coursework, Week 7
 */

"use strict";

const { Duplex } = require("stream");

class CharacterCreator extends Duplex {
  constructor(options) {
    super(options);
    this.data = "";
  }

  _write(chunk, encoding, callback) {
    const input = chunk.toString().trim();
    console.log("Received input:", input); 
    if (!input) {
      this.emit("error", new Error("Character data cannot be empty"));
    } else {
      this.data = input;
      callback();
    }
  }

  _read(size) {
    console.log("Stored data:", this.data);
    const [charClass, gender, funFact] = this.data.split(",");
    if (!charClass || !gender || !funFact) {
      console.error("Data split issue:", this.data);
    }
    const description = `Class: ${charClass}, Gender: ${gender}, Fun Fact: ${funFact}`;
    console.log("Generated output:", description);
    this.push(description);
    this.push(null);
  }
}

module.exports = CharacterCreator;
