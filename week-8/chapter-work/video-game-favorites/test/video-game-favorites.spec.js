"use strict";

const { read } = require("fs");

const fs = require("fs").promises;

describe("Video Game Favorites", () => {
  let readFavoriteGames;
  let writePlayerRatings;

  beforeEach(() => {
    jest.resetModules();
    jest
      .spyOn(fs, "readFile")
      .mockImplementation(() => Promise.resolve("Game 1\nGame 2\nGame 3\n"));
    jest.spyOn(fs, "writeFile").mockImplementation(() => Promise.resolve());
    ({
      readFavoriteGames,
      writePlayerRatings,
    } = require("../src/video-game-favorites"));
  });

  test("reads favorite games from a file", async () => {
    const games = await readFavoriteGames();
    expect(games).toEqual(["Game 1", "Game 2", "Game 3"]);
  });

  test("writes player ratings to a file", async () => {
    await expect(
      writePlayerRatings(["Rating 1", "Rating 2", "Rating 3"])
    ).resolves.toBeUndefined();
  });

  test("handles errors when reading favorite games", async () => {
    fs.readFile.mockImplementationOnce(() =>
      Promise.reject(new Error("File not found"))
    );

    await expect(readFavoriteGames()).rejects.toThrow("File not found");
  });
});
