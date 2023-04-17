// function called findKey that scan the object and return the first key for which the callback returns a truthy value
const findKey = function(object, callback) {
  // loop through each key of the object
  for (let key in object) {
    // if the callback returns false
    if (!callback(object[key])) {
      // continue
      continue;
    }
    // if callback funtion returns true then return the current key
    return key;
  }
  // if no key is found then return undefined
  return undefined;
};

// export findKey function
module.exports = findKey;
