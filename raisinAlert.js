// write a function that looks for raisin in given array
const raisinAlarm = function (cookie) {
  for (let alert = 0; alert < cookie.length; alert++) {                    // loop through the array
    if(cookie[alert] === "🍇") {                                          // condition that search through the array if there is a raisin
      return "Raisin Alert!"  
    }
  }
  return "All Good!"                                                      // return "All Good!" if raisin is not detected in the
}
console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"]));
console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"]));
console.log(raisinAlarm(["🍫", "🍫", "🍫"]))