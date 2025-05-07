"use strict";

// create a Buffer with the text "RoseBush"
const roseBushBuffer = Buffer.from("RoseBush");

// Print the length of the Buffer
console.log(`Length of RoseBush buffer: ${roseBushBuffer.length}`);

// Create a buffer with the text " and Tulips"
const andTulipsBuffer = Buffer.from(" and Tulips");

// Concatenate the Buffers
const plantsBuffer = Buffer.concat([roseBushBuffer, andTulipsBuffer]);

// Print the concatenated buffer
console.log(`Concatenated buffer: ${plantsBuffer.toString()}`);

// Fill the plantsBuffer with "Sunflowers"
plantsBuffer.fill("Sunflowers");

// Print the filled buffer
console.log(`Filled buffer: ${plantsBuffer.toString()}`);

// Create a slice of the plantsBuffer
const sliceBuffer = plantsBuffer.slice(0, 5);

// Print the sliced buffer
console.log(`Sliced buffer: ${sliceBuffer.toString()}`);
