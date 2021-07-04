function add(x) {
  // Return a function which takes a parameter 'y'
  return function (y) {
    // Return a function which takes a parameter 'z'
    return function (z) {
      // Since we have access to x and y via closure, return x + y + z
      return x + y + z;
    };
  };
}
// Log output
console.log(add(10)(20)(30));
