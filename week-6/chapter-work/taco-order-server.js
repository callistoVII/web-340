"use strict";

const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  const queryObject = url.parse(req.url, true).query;

  if (req.url.startsWith("/beef")) {
    const topping = queryObject.topping;
    if (topping === "cheese") {
      res.write("You've ordered a beef taco with Cheese!");
    } else if (topping === "salsa") {
      res.write("You've ordered a beef taco with salsa!");
    } else {
      res.write("You've ordered a plain beef taco!");
    }
    res.end();
  } else if (req.url.startsWith("/chicken")) {
    const topping = queryObject.topping;
    if (topping === "guacamole") {
      res.write("You've ordered a chicken taco with guacamole!");
    } else if (topping === "sourcream") {
      res.write("You've ordered a chicken taco with sour cream!");
    } else {
      res.write("You've ordered a plain chicken taco!");
    }
    res.end();
  } else if (req.url.startsWith("/veggie")) {
    const topping = queryObject.topping;
    if (topping === "beans") {
      res.write("You've ordered a veggie taco with beans!");
    } else if (topping === "rice") {
      res.write("You've ordered a veggie taco with rice!");
    } else {
      res.write("You've ordered a plain veggie taco!");
    }
    res.end();
  } else {
    res.write(
      "Welcome to the Taco Stand! Visit /beef, /chicken, or /veggie with appropriate query parameters to place your order."
    );
    res.end();
  }
});

server.listen(3000, () =>
  console.log("Taco Order Server Started (http://localhost:3000/)!")
);
