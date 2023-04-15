// import tail function
const tail = require("./tail");
// import assertEqual function
const assertEqual = require("./assertEqual");

// TEST CODE
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail!