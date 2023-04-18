// import assert library from chai package
const assert = require("chai").assert;
// import tail function
const tail = require("../tail");

/* TEST CODE
const tail = require('../tail');
const assertEqual = require('../assertEqual');
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"]);
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);
*/

// describe tail function using describe function
describe("tail function", () => {
  // it function used to specify a test case for tail function
  // compare array from tail function output with expected array output using assert.deepEqual method
  it("returns 'Lighthouse', 'Labs' for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });
  // check the length of array remains unchaged using assert.deepEqual method
  it("returns new array and not modify the original array", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    tail(words);
    assert.deepEqual(words.length, 3);
  });
});