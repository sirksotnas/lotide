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

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  const keyOfObject1 = Object.keys(object1);
  const keyOfObject2 = Object.keys(object2);
  // if the number of keys in object1 is not equal to the number of keys in object2
  if (keyOfObject1.length !== keyOfObject2.length) {
    // return false
    return false;
  }
  // loop through each key in objects
  for (let key of keyOfObject1) {
    const valueOfObject1 = object1[key];
    const valueOfObject2 = object2[key];
    // if value of object1 is and array and value of object2 pass it onto eqArrays
    if (Array.isArray(valueOfObject1) && Array.isArray(valueOfObject2)) {
      // if both are not of equal value
      if (!eqArrays(valueOfObject1, valueOfObject2)) {
        // return false
        return false;
      }
      // else if value of object1 at current key is not equal to value of object2 at current key
    } else if (valueOfObject1 !== valueOfObject2) {
      // return false
      return false;
    }
  }
  //return true
  return true;
};

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(object1, object2) {
  // import the library
  const inspect = require('util').inspect;
  if (eqObjects(object1, object2)) {
    // log passed
    console.log(`✅Assertion Passed: ${inspect(object1)} === ${inspect(object2)}`);
    // log failed
  } else {
    console.log(`🛑Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`);
  }
};

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
console.log(eqObjects(shirtObject, anotherShirtObject)); // => true
assertObjectsEqual(shirtObject, anotherShirtObject);

const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
console.log(eqObjects(shirtObject, longSleeveShirtObject)); // => false
assertObjectsEqual(shirtObject, longSleeveShirtObject);

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
console.log(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject)); // => true
assertObjectsEqual(multiColorShirtObject, anotherMultiColorShirtObject);

const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
console.log(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject)); // => false
assertObjectsEqual(multiColorShirtObject, longSleeveMultiColorShirtObject);
