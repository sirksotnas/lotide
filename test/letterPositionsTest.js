// import assert library from chai package
const assert = require("chai").assert;
// import letterPositions function
const letterPositions = require('../letterPositions');

// INITIAL TEST CODE
// console.log(letterPositions("lighthouse in the house"));
// assertArraysEqual(letterPositions("lighthouse in the house").l, [1]);
// assertArraysEqual(letterPositions("lighthouse in the house").h, [3, 5, 15, 18]);

// describe letterPositions with describe function
describe("letterPostions function", () => {
  // it function used to specify a test case for letterPositions function
  // compare letterPositions function output with expected output using assert.strictEqual method
  it("returns the index of each letter shown in the string", () => {
    assert.deepEqual(letterPositions("lighthouse in the house"), {
      l: [0],
      i: [1, 11],
      g: [2],
      h: [3, 5, 15, 18],
      t: [4, 14],
      o: [6, 19],
      u: [7, 20],
      s: [8, 21],
      e: [9, 16, 22],
      n: [12],
    });
  });
});