const assertEqual = function(actualNumber, expectedNumber) {
  if (actualNumber !== expectedNumber) {
    console.log(`🛑Assertion Failed: ${actualNumber} !== ${expectedNumber}`);
  } else {
    console.log(`✅Assertion Passed: ${actualNumber} === ${expectedNumber}`);
  }
};

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
const results1 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
}, x => x.stars === 2);
console.log(results1);
assertEqual(results1, "noma")
