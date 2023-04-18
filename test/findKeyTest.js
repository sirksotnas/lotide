// import assertEqual function
const assertEqual = require('../assertEqual');
// import findKey function
const findKey = require('../findKey');

// TEST CODE
const answer = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  'noma': { stars: 2 },
  "elbBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
}, x => x.stars === 2);

assertEqual(answer, "noma");
assertEqual(answer, undefined);
