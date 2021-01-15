// Find the total number of integers that all elements array 'a' are factors of, while also being able to divide evenly into
// every value in array 'b'
// ===============================
// Constraints --> Elements in a || b will be <= 100
function getTotalX(a, b) {
  // Instantiate valid count
  let validCount = 0;
  // Loop over every value between 1 and 100 (since we know the contraint will be that no integer in either array will be > 100)
  for (let value = 1; value <= 100; value++) {
    // Get every value that is evenly divisible by array values in 'a'
    if (a.every((int) => value % int === 0)) {
      // For those values, check if they can divide evenly into values in array 'b'
      if (b.every((int) => int % value === 0)) {
        // If so, increment validCount
        validCount += 1;
      }
    }
  }
  return validCount;
}
// Log output
console.log(getTotalX([2, 4], [16, 32, 96]));
