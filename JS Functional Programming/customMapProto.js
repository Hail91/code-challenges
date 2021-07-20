let originalArr = [23, 65, 98, 5];

// Custom implementation of JavaScript's built in map method to help better understand it.
// ** One of the core tenants of functional programming is to not modify program state or make any alterations to global variables, etc. **
Array.prototype.myMap = function (callback) {
  // Copy old array into the array to be returned using ES6's spread operator
  let newArray = [...originalArr];
  // Iterate over the copied array
  for (let i = 0; i < newArray.length; i++) {
    // Execute the callback on each array entry
    newArray[i] = callback(newArray[i]);
  }
  // Return the new changed array
  return newArray;
};
// Test functionality
let new_s = s.myMap(function (item) {
  return item * 2;
});
// Log result
console.log(new_s);
