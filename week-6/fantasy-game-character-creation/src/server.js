/**
 * Author: Nicole Nielsen
 * Date: 04/27/2025
 * File Name: Assignment 6.2
 * Description: Node.js Coursework, Week 6
 */

"use strict";

const http = require("http");
const url = require("url");

const server = http.createServer((request, response) => {
  const parsedUrl = url.parse(request.url, true);
  const pathname = parsedUrl.pathname;
  const query = parsedUrl.query;

  if (pathname === "/create" && request.method === "POST") {
    const characterClass = query.class;
    const gender = query.gender;
    const funFact = query.funFact;

    response.writeHead(201);
    response.end(
      `${gender} Character ${characterClass} created! Fun fact is ${funFact}.`
    );
  } else if (pathname === "/character" && request.method === "GET") {
    response.writeHead(200);
    response.end("Character page.");
  } else if (pathname === "/confirm" && request.method === "POST") {
    response.writeHead(200);
    response.end("Character has been successfully saved.");
  } else {
    response.writeHead(404);
    response.end();
  }
});

server.listen(3000);
module.exports = server;
