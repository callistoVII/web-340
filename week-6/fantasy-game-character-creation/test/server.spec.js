/**
 * Author: Nicole Nielsen
 * Date: 04/27/2025
 * File Name: Assignment 6.2
 * Description: Node.js Coursework, Week 6
 */

"use strict";

const http = require("http");
const server = require("../src/server");

describe("Fantasy Game Character Creation Server", () => {
  afterAll(() => {
    // Close server after all tests run
    server.close();
  });

  test("responds to character/POST request with query parameter", (done) => {
    const options = {
      hostname: "localhost",
      port: 3000,
      path: "/create?class=Mage&gender=Female&funFact=Powerful",
      method: "POST",
    };

    const request = http.request(options, (response) => {
      let data = "";
      response.on("data", (chunk) => {
        data += chunk;
      });
      response.on("end", () => {
        expect(response.statusCode).toBe(201);
        expect(data).toBe(
          "Female Character Mage created! Fun fact is Powerful."
        );
        done();
      });
    });
    request.end();
  });

  test("response to character/GET request", (done) => {
    http.get("http://localhost:3000/character", (response) => {
      let data = "";
      response.on("data", (chunk) => {
        data += chunk;
      });
      response.on("end", () => {
        expect(response.statusCode).toBe(200);
        expect(data).toBe("Character page.");
        done();
      });
    });
  });

  test("response to /confirm POST request", (done) => {
    const options = {
      hostname: "localhost",
      port: 3000,
      path: "/confirm",
      method: "POST",
    };

    const request = http.request(options, (response) => {
      let data = "";
      response.on("data", (chunk) => {
        data += chunk;
      });
      response.on("end", () => {
        expect(response.statusCode).toBe(200);
        expect(data).toBe("Character has been successfully saved.");
        done();
      });
    });
    request.end();
  });
});
