"use strict";

const fs = require("fs");

describe("Trivia Game", () => {
  let readTriviaQuestions;
  let writeTriviaAnswers;

  beforeEach(() => {
    jest.resetModules();
    jest
      .spyOn(fs, "readFile")
      .mockImplementation((file, options, callback) =>
        callback(null, "Question 1\nQuestion 2\nQuestion 3")
      );
    jest
      .spyOn(fs, "writeFile")
      .mockImplementation((file, data, callback) => callback(null));
    ({
      readTriviaQuestions,
      writeTriviaAnswers,
    } = require("../src/trivia-game"));
  });

  test("reads student answers from a file", (done) => {
    readTriviaQuestions((err, questions) => {
      expect(err).toBeNull();
      expect(questions).toEqual(["Question 1", "Question 2", "Question 3"]);
      done();
    });
  });

  test("writes student answers to a file", (done) => {
    writeStudentAnswers(["Answer 1", "Answer 2", "Answer 3"], (err) => {
      expect(err).toBeNull();
      done();
    });
  });

  test("handles errors when reading trivia questions", (done) => {
    fs.readFile.mockImplementationOnce((file, options, callback) =>
      callback(new Error("File not found"))
    );

    readTriviaQuestions((err) => {
      expect(err).not.toBeNull();
      expect(err.message).toBe("File not found");
      done();
    });
  });
});
