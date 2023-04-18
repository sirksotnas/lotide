// import assert library from chai package
const assert = require("chai").assert;
// import eqObjects function
const eqObjects = require('../eqObjects');

// TEST CODE
// const shirtObject = { color: "red", size: "medium" };
// const anotherShirtObject = { size: "medium", color: "red" };
// console.log(eqObjects(shirtObject, anotherShirtObject)); // => true

// const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
// console.log(eqObjects(shirtObject, longSleeveShirtObject)); // => false

// assertEqual(eqObjects(shirtObject, anotherShirtObject), true); // assertion passed!
// assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false); // assertion passed!
// assertEqual(eqObjects(shirtObject, longSleeveShirtObject), true); // assertion failed!

// const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
// const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
// console.log(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject)); // => true

// const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
// console.log(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject)); // => false

describe("eqObjects function", () => {
  it("returns true for objects with same elements and different or same order", () => {
    const shirtObject = { color: "red", size: "medium" };
    const anotherShirtObject = { size: "medium", color: "red" };
    assert.deepEqual(eqObjects(shirtObject, anotherShirtObject), true);
  });
  it("returns true for object with same nested arrays", () => {
    const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
    const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
    assert.deepEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true);
  });
});