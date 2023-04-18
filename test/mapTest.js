// import assert library from chai package
const assert = require("chai").assert;
// import map function
const map = require('../map');

// TEST CODE
// const words = ["ground", "control", "to", "major", "tom"];
// const results1 = map(words, function(word) {
//   return word[0];
// });
// console.log(results1);
// assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']); // pass!
// assertArraysEqual(words, ["ground", "control", "to", "major", "tom"]); // pass!
// assertArraysEqual(results1, ['t', 'm', 't', 'c', 'g']); // fail!
// assertArraysEqual(words, ["ground", "control"]); // fail!

// describe map function with describe function
describe("map funciton", () => {
  it("returns new array of the result from callback on each element", () => {
    const words = ["ground", "control", "to", "major", "tom"];
    const results = map(words, function(word) {
      return word[0];
    });
    assert.deepEqual(results, ['g', 'c', 't', 'm', 't']);
  });
  it("returns new array and not modify the original array", () => {
    const words = ["ground", "control", "to", "major", "tom"];
    assert.deepEqual(words, ["ground", "control", "to", "major", "tom"]);
  });
});