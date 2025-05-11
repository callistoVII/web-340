"use strict";

const { readFile, writeFile } = require("fs");
const { join } = require("path");

const TRIVIA_QUESTIONS_FILE = join(__dirname, "questions.txt"); // __dirname is the directory of the current file
const STUDENT_ANSWERS_FILE = join(__dirname, "answers.txt");

function readTriviaQuestions(callback) {
  readFile(TRIVIA_QUESTIONS_FILE, { encoding: "utf-8" }, (err, data) => {
    if (err) {
      callback(err);
    } else {
      const questions = data.split("\n").filter((question) => question);
      callback(null, questions); // null is the first argument because there is no error
    }
  });
}

function writeStudentAnswers(answers, callback) {
  const data = answers.join("\n");

  writeFile(STUDENT_ANSWERS_FILE, data, (err) => {
    callback(err);
  });
}

module.exports = { readTriviaQuestions, writeStudentAnswers };
