"use strict";

const { spawnSync } = require("child_process");

class TriviaGame {
  answerQuestion(question, answer) {
    const child = spawnSync("node", ["answer-checker.js"], {
      input: JSON.stringify({ question, answer }),
    });

    if (child.error) {
      throw child.error;
    }

    const result = child.stdout.toString();

    return result === "Correct";
  }
}

module.exports = { TriviaGame };
