// function called eqArrays that determine if array value is equal
const eqArrays = function(array1, array2) {
  // if array1 and array2 are not equal length value
  if (array1.length !== array2.length)
    // sad(falsy) path return as false
    return false;
  // c-style loop to access each index of the array's parameter
  for (let index = 0; index < array1.length; index++) {
    // if element is an array
    if (Array.isArray(array1[index]) && Array.isArray(array2[index])) {
      // if calling eqArrays with value of array1 and array2 as an arguement is not true
      if (!eqArrays(array1[index], array2[index])) {
        // return false
        return false;
      }
      // if array1 and array2 value is not equal
    } else if (array1[index] !== array2[index]) {
      // sad(falsy) path return as false
      return false;
    }
  }
  // happy(truthy) path return as true
  return true;
};

// export eqArrays function
module.exports = eqArrays;
