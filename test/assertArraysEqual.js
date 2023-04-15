// import eqArrays function
const eqArrays = require("./eqArrays");

// function called assertArraysEqual that is calling eqArrays to compare two arrays if they are the same
const assertArraysEqual = function(array1, array2) {
  // conditional statement that determines if eqArray is true or false
  if (eqArrays(array1, array2)) {
    // outputting string passed
    console.log(`✅Assertion Passed: ${array1} === ${array2}`);
    // outputting string failed
  } else {
    console.log(`🛑Assertion Failed: ${array1} !== ${array2}`);
  }
};

// export assertArraysEqual function
module.exports = assertArraysEqual;