// function called middle to determine the middle of an array
const middle = function(array) {                     
  // empty array to put the results of the middle element(s)of an array                  
  let  results = [];           
   // Math.floor method to round down the array's length when divided to 2                                         
  const middleArray = Math.floor(array.length / 2);
  // if an array only has less than or equal to 2 element
  if (array.length <= 2) {
    // return empty array                                             
    return [];
  }
  // if an array's length is an even number
  if (array.length % 2 === 0) {     
    // using slice method that gets the element before the middle and the middle element and store it in results                        
    results = array.slice(middleArray - 1, middleArray + 1);           
  } else {
    // otherwise use push method to put the middle element in the results for odd number of array's length
    results.push(array[middleArray]);                                 
  }
  // return results
  return results;
};

// export middle function
module.exports = middle;