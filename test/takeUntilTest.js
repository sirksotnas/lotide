// import assert library from chai package
const assert = require("chai").assert;
// import takeUntil function
const takeUntil = require('../takeUntil');

// TEST CODE
// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 6];
// const results1 = takeUntil(data1, x => x < 0);
// console.log(results1);
// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(data2, x => x === ',');
// console.log(results2);
// assertArraysEqual(results1, [1, 2, 5, 7, 2]);  // pass!
// assertArraysEqual(results2, ["I've been to Hollywood"]); // fail!

// describe takeUntil function with describe function
describe("takeUntil function", () => {
  it("returns new array of each element until results from callback returns a truthy value", () => {
    const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 6];
    const results1 = takeUntil(data1, x => x < 0);
    assert.deepEqual(results1, [1, 2, 5, 7, 2]);
    const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
    const results2 = takeUntil(data2, x => x === ",");
    assert.deepEqual(results2, ["I've", "been", "to", "Hollywood"]);
  });
});