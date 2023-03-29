const eqArrays = function(array1, array2) {                           // helper function name eqArrays that determine if array value is equal
  if (array1.length !== array2.length)                                 // conditional statement to determine if eqArray index are the same
    return false;                                                       // sad(falsy) path
  for (let index = 0; index < array1.length; index++) {                // c-style loop to access each index of the array's parameter
    if (array1[index] !== array2[index]) {                             // conditional statement to determine if eqArrays parameter value is not equal
      return false;                                                    // sad(falsy) path
    }
  }
  return true;                                                         // happy(truthy) path
};

const assertArraysEqual = function(array1, array2) {                  // function that calling eqArrays to compare two arrays if they are the same
  if (eqArrays(array1, array2)) {                                      // conditional statement that determines if eqArray is true or false
    console.log(`✅Assertion Passed: ${array1} === ${array2}`);        // outputting string passed
  } else {
    console.log(`🛑Assertion Failed: ${array1} !== ${array2}`);        // outputting string failed
  }
};

const middle = function(array) {                                       // function name middle to determine the what is the middle of an array
  let  results = [];                                                    // empty array to put the results of the middle element(s)of an array
  const middleArray = Math.floor(array.length / 2);                    // Math.floor method to round down the arrays length when divided to 2
  if (array.length <= 2) {                                             // conditional statement that determine if an array only has 1 or 2 element which return no middle
    return [];
  }
  if (array.length % 2 === 0) {                                        // conditional statement that determine if an array has even number which returns 2 middle
    results = array.slice(middleArray - 1, middleArray + 1);           // using slice method to take out the last index and adding one to put two index for even number of elements
  } else {
    results.push(array[middleArray]);                                  // else statement that returns the middle of the array when its an odd number
  }
  return results;
};

// For arrays with one or two elements, there is no middle. Return an empty array.
assertArraysEqual(middle([1]),[]); // => []
assertArraysEqual(middle([1, 2]), []); // => []
// For arrays with odd number of elements, an array containing a single middle element should be returned.
assertArraysEqual(middle([1, 2, 3]), [2]); // => [2]
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // => [3]
// For arrays with an even number of elements, an array containing the two elements in the middle should be returned
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // => [3, 4]