// function called flatten that merge nested arrays or arrays together
const flatten = function(array) {
  // buffer to put the results of the merged array
  let results = [];
  // loop though the array
  for (const item of array) {
    // conditonal statement to check if the nested arrays are arrays
    if (Array.isArray(item)) {
      // concatenate the array and setting it as the results
      results = results.concat(flatten(item));
      // else use push method to push the element inside the buffer if the array is not a nested array
    } else {
      results.push(item);
    }
  }
  // return results to end the loop
  return results;
};

// export flatten function
module.exports = flatten;