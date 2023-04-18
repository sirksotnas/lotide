// import assert library from chai package
const assert = require("chai").assert;
// imports countLetters function
const countLetters = require("../countLetters");

// TEST CODE
// console.log(countLetters("lighthouse in the house"));
// const numOfLetters = countLetters("lighthouse in the house");
// assertEqual(numOfLetters["l"], 1);

// describe countLetters function with describe function
describe("countLetters function", () => {
  it("returns the count of each letter in the string", () => {
    const numOfLetters = countLetters("lighthouse in the house");
    assert.deepEqual(numOfLetters["l"], 1);
  });
});