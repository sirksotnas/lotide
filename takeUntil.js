// function called takeUntil that is returning a part of an array until the call back returns a truthy value
const takeUntil = function(array, callback) {
  // an empty array to store the results
  const results = [];
  // loop through each element of the array
  for (let element of array) {
    // if the resutls of callback with element arguement is false
    if (!callback(element)) {
      // push each element to results
      results.push(element);
      // otherwise break out of the loop if its true
    } else {
      break;
    }
  }
  // return results
  return results;
};

// export takeUntil function
module.exports = takeUntil;