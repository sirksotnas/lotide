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

// function name letterPosition that takes in a string and return the index of each character shown in the string
const letterPositions = function(sentence) {
  // create an empty object to store the results
  let results = {};
  // loop through the sentence
  for (let index = 0; index < sentence.length; index++) {
    const character = sentence[index];
    // skip spaces
    if (character === " ") {
      continue;
    }
    // if the character is not already a key in the results object, a new key is created with the character as the key and an empty array as the value.
    if (!results[character]) {
      results[character] = [];
    }
    // the index of the current character is then pushed into the array of indices associated with the current character in the results object.
    results[character].push(index);
  }
  // return the results object
  return results;
};

console.log(letterPositions("lighthouse in the house"));
assertArraysEqual(letterPositions("lighthouse in the house").l, [0]);