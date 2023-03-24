const assertEqual = function(actualNumber, expectedNumber) {
  if (actualNumber !== expectedNumber) {
    console.log((`🛑Assertion Failed: ${actualNumber} !== ${expectedNumber}`));
  } else {
    console.log((`✅Assertion Passed: ${actualNumber} === ${expectedNumber}`));
  }
};

const tail = function (actualNumber) {
  return actualNumber.slice(1)
};

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail!