// import assert library from chai package
const assert = require("chai").assert;
// import eqArrays function
const eqArrays = require("../eqArrays");

/* TEST CODE
console.log(eqArrays([], []));
console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true
console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false
console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS

 STRETCH TEST CODE
console.log(eqArrays([[2, 3], [4]], [[2, 3], [4]])); // => true
console.log(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]])); // => false
console.log(eqArrays([[2, 3], [4]], [[2, 3], 4]));// => false
*/

// decribe eqArrays function using describe function
describe("eqArrays function", () => {
  // it function used to specify a test case for eqArrays function
  // compare array from eqArrays function output with expected array output using assert.deepEqual method to determine true or false
  it("returns true for empty arrays ", () => {
    assert.deepEqual(eqArrays([], []), true);
  });
  it("returns true for arrays with the same elements and order", () => {
    assert.deepEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });
  it("returns false for arrays with the same elements but different order", () => {
    assert.deepEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
  });
  it("returns false for arrays with same elements but different primitive types", () => {
    assert.deepEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
  });
  it("returns false for different nested arrays", () => {
    assert.deepEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false);
  });
});