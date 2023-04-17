// function called countLetter that takes in a string and return a coutn of each of the letter
const countLetters = function(sentence) {
  // buffer to store the count of each letter
  let results = {};
  // looping through each of the letters in the string
  for (let letter of sentence) {
    // conditonal statement that would not count the spaces in the string
    if (letter === " ") {
      continue;
    }
    // conditional statement increment the count of each letter into results as we encounter each letter in the string
    if (results[letter]) {
      results[letter] += 1;
      // else statement thats puts a value of 1 to each letter if its encountered in the string
    } else {
      results[letter] = 1;
    }
  }
  // return the results to output the string and how many time it shows up in each index
  return results;
};

// export countLetters function
module.exports = countLetters;