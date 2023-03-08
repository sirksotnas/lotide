const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else return console.log(`🛑🛑🛑Assertion Failed: ${actual} !=== ${expected}`);
};
const tail = function(arr) {
  return arr[0];
};
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail!