// FUNCTION IMPLEMENTATION
const assertEqual = function(actualNumber, expectedNumber) {
  if (actualNumber !== expectedNumber) {
    console.log((`🛑Assertion Failed: ${actualNumber} !== ${expectedNumber}`));
  } else {
    console.log((`✅Assertion Passed: ${actualNumber} === ${expectedNumber}`));
  }
};

const head = function(actualNumber) {       // function helper that returns the first index of an array
  return actualNumber[0];
};

// TEST CODE
assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");