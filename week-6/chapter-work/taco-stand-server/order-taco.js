"use strict";

const http = require("http");

const server = http.createServer((req, res) => {
  let body = "";
  req.on("data", (chunk) => {
    body += chunk.toString();
  });

  req.on("end", () => {
    console.log(`Order: ${body}`);
    res.end();
  });
});

server.listen(3000, () => console.log("Taco Stand Server started (http://localhost:3000/!"));

