let s = [23, 65, 98, 5];
// Custom filter function (could be used as a polyfill for filter)
Array.prototype.myFilter = function (callback) {
  // Establish new array to return (tenant of FP is not to modify data directly but always return a new copy, functions should be pure)
  let newArray = [];
  // Iterate over length of the called upon array
  for (let i = 0; i < this.length; i++) {
    // If the callback condition is met...
    if (callback(this[i]) === true) {
      // Push that value into the new array
      newArray.push(this[i]);
    }
  }
  // Return the copy
  return newArray;
};

let new_s = s.myFilter(function (item) {
  // Return only odd values
  return item % 2 === 1;
});
// Log result
console.log(new_s);
