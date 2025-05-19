/**
 * Author: Nicole Nielsen
 * Date: 05/18/2025
 * File Name: Assignment 9.2
 * Description: Node.js Coursework, Week 9
 */

const { spawn } = require("child_process");
const path = require("path");

class GameCharacters {
  constructor(scriptName) {
    this.scriptPath = path.join(__dirname, scriptName);
  }

  getCharacters(callback) {
    const child = spawn("node", [this.scriptPath]);

    let data = "";
    let error = "";

    child.stdout.on("data", (chunk) => (data += chunk));
    child.stderr.on("data", (chunk) => (error += chunk));

    child.on("close", (code) => {
      if (code !== 0) {
        console.error(`Error: ${error}`);
        return callback(error, null);
      }
      try {
        callback(null, JSON.parse(data));
      } catch (err) {
        callback(err.message, null);
      }
    });
  }
}

module.exports = GameCharacters;
