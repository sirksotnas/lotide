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

const assertArraysEqual = function (array1, array2) {                  // function that calling eqArrays to compare two arrays if they are the same
  if (eqArrays(array1, array2)) {                                      // conditional statement that determines if eqArray is true or false
    console.log(`✅Assertion Passed: ${array1} === ${array2}`)        // outputting string passed
  } else {
    console.log(`🛑Assertion Failed: ${array1} !== ${array2}`)        // outputting string failed 
  }
};

const flatten = function() {

};

console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]
console.log(flatten([1, 2, 3], [1]));
console.log(flatten(["1", "2", "3", ], [1, 2, "3"]));