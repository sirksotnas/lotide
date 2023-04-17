// import eqArrays fucntion
const eqArrays = require("./eqArrays");

// function called eqObjects that returns true if both objects have identical keys with identical values. Otherwise you get back a big fat false!
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
    } else if (typeof valueOfObject1 === 'object' && typeof valueOfObject2 === 'object') {
      if (!Array.isArray(valueOfObject1) && !Array.isArray(valueOfObject2)) {
        if (!eqObjects(valueOfObject1, valueOfObject2)) {
          return false;
        }
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

// export eqObjects function
module.exports = eqObjects;