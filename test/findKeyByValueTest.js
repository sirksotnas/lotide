// import assert library from chai package
const assert = require("chai").assert;
// importing findKeyByValue function
const findKeyByValue = require('../findKeyByValue');


// TEST CODE
// const bestTVShowsByGenre = {
//   sciFi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama:  "The Wire"
// };
// console.log(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"));  // output: "comedy"
// console.log(findKeyByValue(bestTVShowsByGenre, "The Expanse")); // output: "sci_fi"
// console.log(findKeyByValue(bestTVShowsByGenre, "The Little Mermaid"));  // output: "undefined"
// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama"); // passed: drama === drama
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined); // passed: undefined === undefined

// descrinbe findByKeyValue function with describe function
describe("findByKeyValue function", () => {
  // it function used to specify a test case for findByKeyValue function
  // compare findByKeyValue function output with expected output using assert.strictEqual method
  it("returns correct key for given value", () => {
    const bestTVShowsByGenre = {
      sciFi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama:  "The Wire"
    };
    assert.deepEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy");
  });
  it("returns undefined key if the value does not exist", () => {
    const bestTVShowsByGenre = {
      sciFi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama:  "The Wire"
    };
    assert.deepEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
  });
});