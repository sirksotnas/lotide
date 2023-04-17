// create a function name map that return a new array based on the results of the callback function
const map = function(array, callback) {
  // create an empty array to store the results of callback function
  const results = [];
  // loop through each element in the array
  for (let item of array) {
    // call the function on each element and push the results in the empty array
    results.push(callback(item));
  }
  // return the result array
  return results;
};

// export map function
module.exports = map;
