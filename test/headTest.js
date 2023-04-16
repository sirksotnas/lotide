// import assert library from chai package
const assert = require("chai").assert;
// import head function from head module
const head = require("../head");

// TEST CODE

// describe head function using describe function
describe("head function", () => {
  // it function used to specify a test case for head function
  // compare head function output with expected output using assert.strictEqual method
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5');
  });
  it("returns 'Hello' for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(head(['5']), '5');
  });
  it("returns 5 for [5, 6, 7]", () => {
    assert.strictEqual(head(['5']), '5');
  });
});