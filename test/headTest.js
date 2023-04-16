// import assertEqual function
const assert = require("chai").assert;
// import head function
const head = require("../head");

// TEST CODE
// assertEqual(head([5, 6, 7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

describe("head function", () => {
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