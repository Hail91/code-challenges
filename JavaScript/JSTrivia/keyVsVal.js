const obj = {
  1: 1,
  2: 2,
  3: 3,
};

console.log(Object.keys(obj) == Object.values(obj)); // What does this return?

// Keys returns an array of strings, values returns an array of numbers in this case, even though == will perform type coercion
// in JavaScript, both arrays refer to different places in memory, therefore it will return false.
