// import assert library from chai package
const assert = require("chai").assert;
// import without function
const without = require('../without');

// TEST CODE
// without([1, 2, 3], [1]); // => [2, 3]
// assertArraysEqual([2, 3], [2, 3]); // => pass!
// without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]
// assertArraysEqual([1, 2], [1, 2]); // => pass!
// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]); // no need to capture return value for this test case
// assertArraysEqual(words, ["hello", "world", "lighthouse"]); // Make sure the original array was not altered by the without function => pass!

describe("without function", () => {
  it("returns new array from first arguement that is not in the second arguement ", () => {
    assert.deepEqual(without([1, 2, 3], [1]), [2, 3]);
    assert.deepEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
    assert.deepEqual(without([], [1, 2, "3"]), []);
  });
  it("returns new array and not modify the original array", () => {
    const words = ["hello", "world", "lighthouse"];
    without(words, ["lighthouse"]);
    assert.deepEqual(words, ["hello", "world", "lighthouse"]);
  });
});