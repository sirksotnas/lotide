// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  let results = "";
  if (actual !== expected) {
    results = (`🛑Assertion Failed: ${actual} !== ${expected}`);
  } else {
    results = (`✅Assertion Passed: ${actual} === ${expected}`);
  }
  console.log(results);
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual("Lighthouse Labs", "Lighthouse Labs");
assertEqual(1, 2);
assertEqual(1, 1);