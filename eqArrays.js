const assertEqual = function(actualNumber, expectedNumber) {
  if (actualNumber !== expectedNumber) {
    console.log(`🛑Assertion Failed: ${actualNumber} !== ${expectedNumber}`);
  } else {
    console.log(`✅Assertion Passed: ${actualNumber} === ${expectedNumber}`);
  }
};

const eqArrays = function(array1, array2) {                           // helper function name eqArrays that determine if array value is equal
  if (array1.length !== array2.length)                                // conditional statement to determine if eqArray index are the same
    return false;                                                     // sad(falsy) path
  for (let index = 0; index < array1.length; index++) {               // c-style loop to access each index of the array's parameter
    if (array1[index] !== array2[index]) {                            // conditional statement to determine if eqArrays parameter value is not equal
      return false;                                                   // sad(falsy) path
    }
  }
  return true;                                                        // happy(truthy) path
};
console.log(eqArrays([], []));
console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true
console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false
console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS