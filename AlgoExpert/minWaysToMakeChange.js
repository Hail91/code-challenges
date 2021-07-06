// Time complexity: O(nd) where n is the target int and d is the number of denoms
// Space Complexity: O(n) where n is the target int (must construct array of length 'n')
function minNumberOfCoinsForChange(n, denoms) {
  // Build array of length n + 1 (n + 1 because we must represent 0 dollars at first index)
  let possibilities = Array.from(Array(n + 1), () => Infinity);
  // Set the first value to be zero (zero ways to make zero dollars scenario)
  possibilities[0] = 0;
  // Iterate over denoms
  for (let denom of denoms) {
    // For each denom, iterate over the array of possible amounts
    for (let amount = 0; amount < possibilities.length; amount += 1) {
      // If the denom in question is less than or equal to the amount we're trying to make
      if (denom <= amount) {
        // Reassign the amount in our array to the smaller of the two values
        // Either the current amount that can be used in the array, or 1 + the last calculation
        possibilities[amount] = Math.min(
          possibilities[amount],
          1 + possibilities[amount - denom]
        );
      }
    }
  }
  // If change can be made, return that amount, otherwise return -1
  return possibilities[n] !== Infinity ? possibilities[n] : -1;
}
// Log output
console.log(minNumberOfCoinsForChange(6, [1, 2, 4]));
