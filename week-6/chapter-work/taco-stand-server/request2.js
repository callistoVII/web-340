"use strict";

const http = require("http");
const url = require("url");

// reading query parameters
const server = http.createServer((req, res,) => {
	const query = url.parse(req.url, true).query;
	console.log(`Name: ${query.name}, Age: ${query.age}`);
	res.end();
});

server.listen(3000, () => console.log("Server started (http://localhost:3000/)!"));

