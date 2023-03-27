const eqArrays = function (array1, array2) {                           // helper function name eqArrays that determine if array value is equal
  if (array1.length !== array2.length)                                 // conditional statement to determine if eqArray index are the same   
    return false                                                       // sad(falsy) path 
  for (let index = 0; index < array1.length; index++) {                // c-style loop to access each index of the array's parameter
    if (array1[index] !== array2[index]) {                             // conditional statement to determine if eqArrays parameter value is not equal 
      return false;                                                    // sad(falsy) path
    }
  }
  return true;                                                         // happy(truthy) path
};

const assertArraysEqual = function (array1, array2) {                  // function that calls eqArrays to compare two arrays if they are the same
  if (eqArrays(array1, array2)) {                                      // conditional statement that determines if eqArray is true or false
    console.log(`✅Assertion Passed: ${array1} === ${array2}`)        // outputting string passed
  } else {
    console.log(`🛑Assertion Failed: ${array1} !== ${array2}`)        // outputting string failed 
  }
};

const without = function(source, itemsToRemove) {                      // function name without that compare two arrays, return a part of a given array and remove unwated elements
  let results = [];                                                    // buffer to store the unwated elemets
  for (let index = 0; index < source.length; index++) {                // loop through the given arrays in without arguements
    if (source[index] !== itemsToRemove[index]) {                      // conditional statement that detemine which element is not equal to the each array
      results.push(source[index])                                      // using push methode to store the source array's unwated elements
    }
  }  
  return results;                                                      // return the results to end the function
};

console.log(without([], [])); // => []
console.log(without([1, 2, 3], [1, 2, 3])); // => []
console.log(without([1, 2, 3], [3, 2, 1])); // => [1, 3]
console.log(without(["1", "2", "3"], ["1", "2", "3"])); // => []
console.log(without(["1", "2", "3"], ["1", "2", 3])); // => ["3"]
console.log(without([1, 2, 3], [1])) // => [2, 3]
console.log(without(["1", "2", "3", ], [1, 2, "3"])) // => ["1", "2"]
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);