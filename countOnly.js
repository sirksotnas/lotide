// FUNCTION IMPLEMENTATION
const assertEqual = function(actualNumber, expectedNumber) {
  if (actualNumber !== expectedNumber) {
    console.log(`🛑Assertion Failed: ${actualNumber} !== ${expectedNumber}`);
  } else {
    console.log(`✅Assertion Passed: ${actualNumber} === ${expectedNumber}`);
  }
};

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {       // function name countOnly that counts how many instances of each string were found in the allItems array of strings
  const results = {};                                      // empty object to store values of the object result1
  for (const item of allItems) {                           // looping over the allItems to check how many times each firstNames appear
    if (itemsToCount[item]) {                              // conditional statement to only increment our count in results if the item is found in the itemsToCount object
      if (results[item]) {                                 // conditional statement that increment the count of each item into results as we encounter each string item in the array
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }
  return results;
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);