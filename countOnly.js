// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
// function caled countOnly that counts how many instances of each string were found in the allItems array of strings
const countOnly = function(allItems, itemsToCount) {
  // empty object to store values of the object result
  const results = {};
  // looping over the allItems to check how many times each firstNames appear
  for (const item of allItems) {
    // conditional statement to only increment our count in results if the item is found in the itemsToCount object
    if (itemsToCount[item]) {
      // conditional statement that increment the count of each item into results as we encounter each string item in the array
      if (results[item]) {
        results[item] += 1;
        // otherwide set the result key to equal 1
      } else {
        results[item] = 1;
      }
    }
  }
  // return results to end the loop
  return results;
};

// export countOnly function
module.exports = countOnly;