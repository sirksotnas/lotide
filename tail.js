const assertEqual = function(actualNumber, expectedNumber) {
  if (actualNumber !== expectedNumber) {
    console.log((`🛑Assertion Failed: ${actualNumber} !== ${expectedNumber}`));
  } else {
    console.log((`✅Assertion Passed: ${actualNumber} === ${expectedNumber}`));
  }
};

const tail = function(actualNumber) {          // function helper name tail to return the array without the first element
  return actualNumber.slice(1);                // used slice method to remove the first index of the array
};

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail!