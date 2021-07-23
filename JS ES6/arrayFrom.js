let arrayLikeObject = {
  0: "Hello",
  1: "World",
  length: 2,
};

// Implementation of ES6 Array.from in ES5
const customFrom = (array) => {
  // Take an array like object and return an actual array
  return Array.prototype.slice.call(array);
};
// Log output
console.log(customFrom(arrayLikeObject), "ES5 approach");

// Native implementations in ES6 (From and Spread)
const withoutSpread = Array.from(arrayLikeObject);
// Log output
console.log(withoutSpread, "ES6 without spread");

// DOES NOT WORK, CANNOT USE SPREAD SYNTAX FOR non-iterables. (for iterable objects like the array like obj, use ES6 Array.from())
const withSpread = [...arrayLikeObject];
// Log output
console.log(withSpread, "ES6 with spread"); // <-- Should fail
