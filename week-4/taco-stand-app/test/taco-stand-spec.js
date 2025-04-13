/**
 * Author: Nicole Nielsen
 * Date: 04/12/2025
 * File Name: Assignment 4.2
 * Description: Node.js Coursework, Week 4
 */

"use strict";

const assert = require("assert");
const TacoStandEmitter = require("../src/taco-stand");

function testServeCustomer() {
  const tacoStand = new TacoStandEmitter();
  try {
    tacoStand.on("serve", (customer) => {
      assert.strictEqual(customer, "John");
      console.log("Passed testServeCustomer.");
    });

    tacoStand.serveCustomer("John");
  } catch (err) {
    console.log(`Failed testServeCustomer: ${err}.`);
  }
}

function testPrepareTaco() {
  const tacoStand = new TacoStandEmitter();
  try {
    tacoStand.on("prepare", (taco) => {
      assert.strictEqual(taco, "beef");
      console.log("Passed testPrepareTaco");
    });

    tacoStand.prepareTaco("beef");
  } catch (err) {
    console.log(`Failed testPrepareTaco: ${err}.`);
  }
}

function testHandleRush() {
  const tacoStand = new TacoStandEmitter();
  try {
    tacoStand.on("rush", (rush) => {
      assert.strictEqual(rush, "lunch");
      console.log("Passed testHandleRush");
    });

    tacoStand.handleRush("lunch");
  } catch (err) {
    console.log(`Failed testHandleRush: ${err}.`);
  }
}

testServeCustomer();
testPrepareTaco();
testHandleRush();
