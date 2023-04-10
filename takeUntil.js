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

// function called assertArrayEqual that's calling eqArrays to compare two arrays if they are the same
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

// function called takeUntil that is returning a part of an array until the call back returns a truthy value
const takeUntil = function(array, callback) {
  // an empty array to store the results
  const results = [];
  // loop through each element of the array
  for (let element of array) {
    // if the resutls of callback with element arguement is true
    if (callback(element)) {
      // break out of the loop
      break;
    }
    // otherwise push each element to results until the callback function is true
    results.push(element);
  }
  // return results
  return results;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);
assertArraysEqual(results1, [1, 2, 5, 7, 2]);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);
assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]);