// function called tail to return the array without the first element
const tail = function(actualNumber) {
  // used slice method to remove the first index of the array
  return actualNumber.slice(1);
};

// export tail function
module.exports = tail;