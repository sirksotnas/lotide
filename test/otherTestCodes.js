/**
Test Codes for other Lotide function
-------------------------------------------------------------------------------------------------------------------------
assertObjectsEqual function
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
-------------------------------------------------------------------------------------------------------------------------
countLetters function
console.log(countLetters("lighthouse in the house"));
const numOfLetters = countLetters("lighthouse in the house");
assertEqual(numOfLetters["l"], 1);
-------------------------------------------------------------------------------------------------------------------------
countOnly function
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
-------------------------------------------------------------------------------------------------------------------------
eqObjects function
const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
console.log(eqObjects(shirtObject, anotherShirtObject)); // => true
assertEqual(eqObjects(shirtObject, anotherShirtObject), true);

const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
console.log(eqObjects(shirtObject, longSleeveShirtObject)); // => false
assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false);

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
console.log(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject)); // => true
assertEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true);

const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
console.log(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject)); // => false
assertEqual(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject), false);
-------------------------------------------------------------------------------------------------------------------------
findKey function
const results1 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
}, x => x.stars === 2);
console.log(results1);
assertEqual(results1, "noma");
-------------------------------------------------------------------------------------------------------------------------
findKeyByValue function
const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"),
  "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"),
  "sciFi");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
-------------------------------------------------------------------------------------------------------------------------
flatten function
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]); // => [1, 2, 3, 4, 5, 6]
-------------------------------------------------------------------------------------------------------------------------
letterPositions function
console.log(letterPositions("lighthouse in the house"));
assertArraysEqual(letterPositions("lighthouse in the house").l, [0]);
-------------------------------------------------------------------------------------------------------------------------
map function
const numbers = [1, 2, 3];
const words = ["ground", "control", "to", "major", "tom"];
assertArraysEqual(results1, ["g", "c", "t", "m", "t"]);
assertArraysEqual(results2, [2, 4, 6]);
assertArraysEqual(words, ["ground", "control", "to", "major", "tom"]);
// call the map function on words array and a callback function that returns the first element of each word
const results1 = map(words, word => word[0]);
console.log(results1);
const results2 = map(numbers, number => {
  return number * 2;
});
-------------------------------------------------------------------------------------------------------------------------
takeUntil functon
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);
assertArraysEqual(results1, [1, 2, 5, 7, 2]);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);
assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]);
-------------------------------------------------------------------------------------------------------------------------
without function
console.log(without([], [])); // => []
console.log(without([1, 2, 3], [1, 2, 3])); // => []
console.log(without([1, 2, 3], [3, 2, 1])); // => [1, 3]
console.log(without(["1", "2", "3"], ["1", "2", "3"])); // => []
console.log(without(["1", "2", "3"], ["1", "2", 3])); // => ["3"]
console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3",], [1, 2, "3"])); // => ["1", "2"]
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
 */
