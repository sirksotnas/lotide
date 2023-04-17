// imports eqObjects function
const eqObjects = require("./eqObjects");

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(object1, object2) {
  // import the library
  const inspect = require('util').inspect;
  if (eqObjects(object1, object2)) {
    // log passed
    console.log(`✅Assertion Passed: ${inspect(object1)} === ${inspect(object2)}`);
    // log failed
  } else {
    console.log(`🛑Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`);
  }
};

// export assertObjectsEqual function
module.exports = assertObjectsEqual;
