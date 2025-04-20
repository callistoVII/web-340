/**
 * Author: Nicole Nielsen
 * Date:   04/20/2025
 * File Name:  Pie Baker spec
 * Description: TDD test
 */

"use strict";

const { bakePie } = require("../src/pie");

// Your tests here
const exit = jest.spyOn(process, "exit").mockImplementation((code) => code);

describe("bakePie", () => {
  let log;

  beforeEach(() => {
    log = jest.spyOn(console, "log");
  });

  afterEach(() => {
    log.mockRestore();
  });

  test("Should successfully bake a pie when all essential ingredients are used", () => {
    const result = bakePie("apple", ["apple", "flour", "sugar", "butter"]);
    expect(result).toBe("The apple pie was successfully baked!");
    expect(exit).not.toHaveBeenCalled();
  });

  test("Should successfully bake different types of pie when all essential ingredients are used", () => {
    const result = bakePie("blueberry", [
      "flour",
      "sugar",
      "butter",
      "blueberries",
    ]);
    expect(result).toBe("The blueberry pie was successfully baked!");
    expect(exit).not.toHaveBeenCalled();
  });

  test("Should log a warning and exit the process when missing essential ingredients.", () => {
    bakePie("apple", ["sugar", "butter", "apples"]);
    expect(log).toHaveBeenCalledWith("Warning: Missing essential ingredients.");
    expect(exit).toHaveBeenCalledWith(1);
  });
});
