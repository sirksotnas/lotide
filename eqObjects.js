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

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  // if the number of keys in object1 is not equal to the number of keys in object2
  if (keys1.length !== keys2.length) {
    // return false
    return false;
  }
  // loop through each key in objects
  for (const key of keys1) {
    // if value of object1 at current key is not an array AND value of object2 at current key is not an array
    if (!Array.isArray(object1[key]) && !Array.isArray(object2[key]))
    // if eqObjects function called with value of object1 at current key and value of object2 at current key as arguments
      if (!eqObjects(object1[key], object2[key])) {
        //return false
        return false;
      }
    // if value of object1 at current key is not equal to value of object2 at current key  
    if (object1[key] !== object2[key]) {
      // return false
      return false;
    }
  }
  //return true
  return true;
};

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
console.log(eqObjects(shirtObject, anotherShirtObject)); // => true
assertArraysEqual(eqObjects(shirtObject, anotherShirtObject), true);

const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
console.log(eqObjects(shirtObject, longSleeveShirtObject)); // => false
assertArraysEqual(eqObjects(shirtObject, longSleeveShirtObject), false);

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
console.log(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject)); // => true
assertArraysEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true);

const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
console.log(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject)); // => false
assertArraysEqual(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject), false);
