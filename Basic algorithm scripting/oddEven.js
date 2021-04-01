const oddEven = (int) => {
  return int & 1 ? "Odd" : "Even";
};
// Log output
console.log(oddEven(47)); // Odd
console.log(oddEven(32)); // Even
