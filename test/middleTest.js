// import assert library from chai package
const assert = require("chai").assert;
// import middle function
const middle = require("../middle");

// TEST CODE
// describe middle function using describe function
describe("middle function", () => {
  // it function used to specify a test case for tail function
  // compare array from middle function output with expected array output using assert.deepEqual method
  it("returns [] for arrays with one or two elements", () => {
    assert.deepEqual(middle([1]), []);
  });
  it("returns single middle element with odd numbers of elements", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });
  it("returns two middle elements with even numbers of elements", () => {
    assert.deepEqual(middle([1,2,3,4,5,6]), [3,4]);
  });
});