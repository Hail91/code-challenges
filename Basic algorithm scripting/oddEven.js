const oddEven = (int) => {
  // Check if last bit (1 position) is set, if so...it's odd...otherwise it's even.
  return int & 1 ? "Odd" : "Even";
};
// Log output
console.log(oddEven(47)); // Odd
console.log(oddEven(32)); // Even
