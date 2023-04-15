// helper function name eqArrays that determine if array value is equal
const eqArrays = function(array1, array2) {
  // conditional statement to determine if eqArray index are the same
  if (array1.length !== array2.length)
    // sad(falsy) path return as false
    return false;
  // c-style loop to access each index of the array's parameter
  for (let index = 0; index < array1.length; index++) {
    // conditional statement to determine if eqArrays parameter value is not equal
    if (array1[index] !== array2[index]) {
      // sad(falsy) path return as false
      return false;
    }
  }
  // happy(truthy) path return as true
  return true;
};

// function that calling eqArrays to compare two arrays if they are the same
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

// Intialize an array
const numbers = [1, 2, 3];
const words = ["ground", "control", "to", "major", "tom"];
// create a function name map that return a new array based on the results of the callback function
const map = function(array, callback) {
  // create an empty array to store the results of callback function
  const results = [];
  // loop through each element in the array
  for (let item of array) {
    // call the function on each element and push the results in the empty array
    results.push(callback(item));
  }
  // return the result array
  return results;
};
// call the map function on words array and a callback function that returns the first element of each word
const results1 = map(words, word => word[0]);
console.log(results1);
const results2 = map(numbers, number => {
  return number * 2;
});

assertArraysEqual(results1, ["g", "c", "t", "m", "t"]);
assertArraysEqual(results2, [2, 4, 6]);
assertArraysEqual(words, ["ground", "control", "to", "major", "tom"]);
