// import assertEqual function
const assertEqual = require("./assertEqual");
// import head function
const head = require("./head");

// TEST CODE
assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");