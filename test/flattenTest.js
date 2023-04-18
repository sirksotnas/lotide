// import assert library from chai package
const assert = require("chai").assert;
// import flatten function
const flatten = require('../flatten');

// TEST CODE
// assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]); // => PASS
// assertArraysEqual(flatten([6, 5, [4, 3], 2, [1]]), [6, 5, 4, 3, 2, 1]); // => PASS
// assertArraysEqual(flatten([6, 5, [4, 3], 2, [1]]), [2, 4, 6, 8]); // => FAIL

// describe flatten function with describe function
describe("flatten function", () => {
  // it function used to specify a test case for flatten function
  // compare flatten function output with expected output using assert.strictEqual method
  it("returns a sorted and merged array", () => {
    assert.deepEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
    assert.deepEqual(flatten([6, 5, [4, 3], 2, [1]]), [6, 5, 4, 3, 2, 1]);
  });
});