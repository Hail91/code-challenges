// The global variable
let s = [23, 65, 98, 5];

// Custom implementation of JavaScript's built in map method to help better understand it.
// ** One of the core tenants of functional programming is to not modify program state or make any alterations to global variables, etc. **
Array.prototype.myMap = function (callback) {
  let newArray = [...s];
  for (let i = 0; i < newArray.length; i++) {
    newArray[i] = callback(newArray[i]);
  }
  return newArray;
};

let new_s = s.myMap(function (item) {
  return item * 2;
});

console.log(new_s);
