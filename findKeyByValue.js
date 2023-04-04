const assertEqual = function(actualNumber, expectedNumber) {
  if (actualNumber !== expectedNumber) {
    console.log(`🛑Assertion Failed: ${actualNumber} !== ${expectedNumber}`);
  } else {
    console.log(`✅Assertion Passed: ${actualNumber} === ${expectedNumber}`);
  }
};

// function name findKeyByValue that determine if the value of the current pair is equal to the given value
const findKeyByValue = function(bestTVShowsByGenre, tvShows) {
  // loop through the given object using for in.. method
  for (let key in bestTVShowsByGenre) {
    // if the tvShows of the current bestTVShowsByGenre value is equal to the given tvShows
    if (bestTVShowsByGenre[key] === tvShows) {
      // return the bestTVShowsByGenre key
      return key;
    }
  }
  // if no bestTVShowsByGenre key is found return undefined
  return undefined;
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"),
  "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"),
  "sci_fi");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);