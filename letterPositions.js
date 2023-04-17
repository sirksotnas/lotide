// function name letterPosition that takes in a string and return the index of each letter shown in the string
const letterPositions = function(sentence) {
  // create an empty object to store the results
  let results = {};
  // loop through the sentence
  for (let index = 0; index < sentence.length; index++) {
    // create a variable for each letter in the sentence
    const letter = sentence[index];
    // skip spaces
    if (letter === " ") {
      continue;
    }
    // if the letter is not already a key in the results object, a new key is created with the letter as the key and an empty array as the value
    if (!results[letter]) {
      results[letter] = [];
    }
    // the index of the current letter is pushed into the array of indices along with the current letter in the results object
    results[letter].push(index);
  }
  // return the results object
  return results;
};

// export letterPosition function
module.exports = letterPositions;