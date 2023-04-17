// function name findKeyByValue that determine if the value of the current pair is equal to the given value
const findKeyByValue = function(bestTVShowsByGenre, tvShows) {
  // loop through the given object using for in.. method
  for (let key in bestTVShowsByGenre) {
    // if the tvShows of the current bestTVShowsByGenre value is equal to the given tvShows
    if (bestTVShowsByGenre[key] === tvShows) {
      // return the bestTVShowsByGenre key
      return key;
    }
  }
  // if no bestTVShowsByGenre key is found return undefined
  return undefined;
};

// export findKeyByValue function
module.exports = findKeyByValue;