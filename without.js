// function called without that compare two arrays, return a part of a given array and remove unwated elements
const without = function(source, itemsToRemove) {
  // buffer to store the unwated elemets
  let results = [];
  // loop through the given arrays in without arguements
  for (let index = 0; index < source.length; index++) {
    // conditional statement that detemine which element is not equal to the each array
    if (source[index] !== itemsToRemove[index]) {
      // using push method to store the source array's unwated elements
      results.push(source[index]);
    }
  }
  // return the results to end the function
  return results;
};

// export without function
module.exports = without;