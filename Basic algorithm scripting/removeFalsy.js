function bouncer(arr) {
  return arr.filter((el) => {
    // Filter returns only values that evalutate to truthy by default
    return el;
  });
}
// Log output
console.log(bouncer([7, "ate", "", false, 9]));
