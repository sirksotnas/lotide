// import assert library from chai package
const assert = require("chai").assert;
// import findKey function
const findKey = require('../findKey');

// TEST CODE
// const answer = findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri": { stars: 3 },
//   'noma': { stars: 2 },
//   "elbBulli": { stars: 3 },
//   "Ora": { stars: 2 },
//   "Akelarre": { stars: 3 }
// }, x => x.stars === 2);

// assertEqual(answer, "noma");
// assertEqual(answer, undefined);

// describe findKey function with describe function
describe("findKey function", () => {
  it("returns the first key of an object if the callback returns truthy value", () => {
    const result = findKey(
      {
        "Blue Hill": { stars: 1 },
        "Akaleri": { stars: 3 },
        "noma": { stars: 2 },
        "elBulli": { stars: 3 },
        "Ora": { stars: 2 },
        "Akelarre": { stars: 3 },
      },
      (x) => x.stars === 2
    );
    assert.deepEqual(result, "noma");
  });
  it("returns undfined if callback returns falsy value", () => {
    const result = findKey(
      {
        "Blue Hill": { stars: 1 },
        "Akaleri": { stars: 3 },
        "noma": { stars: 2 },
        "elBulli": { stars: 3 },
        "Ora": { stars: 2 },
        "Akelarre": { stars: 3 },
      },
      (x) => x.stars === 4
    );
    assert.deepEqual(result, undefined);
  });
});
