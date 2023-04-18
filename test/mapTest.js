// import assertArraysEqual function
const assertArraysEqual = require('../assertArraysEqual');
// import map function
const map = require('../map');

// TEST CODE
const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, function(word) {
  return word[0];
});
console.log(results1);
assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]); // pass!
assertArraysEqual(words, ["ground", "control", "to", "major", "tom"]); // pass!
assertArraysEqual(results1, [ 't', 'm', 't', 'c', 'g' ]); // fail!
assertArraysEqual(words, ["ground", "control"]); // fail!