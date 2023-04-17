// import assertEqual function 
const assertEqual = require("../assertEqual")
// import countLetters function 
const countLetters = require("../countLetters")

console.log(countLetters("lighthouse in the house"));
const numOfLetters = countLetters("lighthouse in the house");
assertEqual(numOfLetters["l"], 1);