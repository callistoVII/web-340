"use strict";

const { Duplex } = require("stream");

class SuperheroCommunicator extends Duplex {
  constructor() {
    super();
  }

  _write(chunk, encoding, callback) {
    console.log(`Batman sends: ${chunk.toString()}`);
    callback();
  }

  _read(size) {
    this.push(`Superman responds: I received your message, Batman.`);
    this.push(null);
  }
}

const communicator = new SuperheroCommunicator();

communicator.on("data", (chunk) => {
  console.log(chunk.toString());
});

communicator.write("Superman, do you copy?");
