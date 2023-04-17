// function called assertEqual that compares two arguments
const assertEqual = function(actualNumber, expectedNumber) {
  // if the two arguements are not equal
  if (actualNumber !== expectedNumber) {
    // print assert failed
    console.log(`🛑Assertion Failed: ${actualNumber} !== ${expectedNumber}`);
  } else {
    // otherwise print assert passed
    console.log(`✅Assertion Passed: ${actualNumber} === ${expectedNumber}`);
  }
};
// export the assertEqual function
module.exports = assertEqual;