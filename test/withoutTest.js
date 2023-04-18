// import assertArraysEqual function
const assertArraysEqual = require('../assertArraysEqual');
// import without function
const without = require('../without');

// TEST CODE
without([1, 2, 3], [1]); // => [2, 3]
assertArraysEqual([2, 3], [2, 3]); // => pass!
without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]
assertArraysEqual([1, 2], [1, 2]); // => pass!
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
assertArraysEqual(words, ["hello", "world", "lighthouse"]); // Make sure the original array was not altered by the without function => pass!