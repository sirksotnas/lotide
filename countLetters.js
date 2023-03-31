// FUNCTION IMPLEMENTATION
const assertEqual = function(actualNumber, expectedNumber) {
  if (actualNumber !== expectedNumber) {
    console.log(`🛑Assertion Failed: ${actualNumber} !== ${expectedNumber}`);
  } else {
    console.log(`✅Assertion Passed: ${actualNumber} === ${expectedNumber}`);
  }
};

const countLetters = function(sentence) {       // function countLetter that takes in a string and return a coutn of each of the letter
  let results = {};                             // buffer to store the count of each letter
  for (let letter of sentence) {                // looping through each of the letters in the string
    if (letter === " ") {                       // conditonal statement that would not count the spaces in the string
      continue;
    }
    if (results[letter]) {                      // conditional statement increment the count of each letter into results as we encounter each letter in the string
      results[letter] += 1;
    } else {                                    // else statement thats puts a value of 1 to each letter if its encountered in the string
      results[letter] = 1;
    }
  }
  return results;
};
console.log(countLetters("lighthouse in the house"));
const numOfLetters = countLetters("lighthouse in the house");
assertEqual(numOfLetters["l"], 1);