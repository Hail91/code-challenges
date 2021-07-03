// Time Complexity: O(nLogn) worst case where n is the length of the coins array
// Space Complexity: O(1) constant space, sort occurs in-place and we use a variable to track output
function nonConstructibleChange(coins) {
  // Set currentChange to zero
  let currentChange = 0;
  // Sort change in ascending order
  coins.sort((a, b) => a - b);
  // Loop over coins array
  for (let i = 0; i < coins.length; ++i) {
    // If the value of current iteration in coins array is greater than currentChange + 1
    if (coins[i] > currentChange + 1) {
      // Return currentChange + 1
      return currentChange + 1;
    } else {
      // Otherwise update currentChange
      currentChange += coins[i];
    }
  }
  // Return currentChange + 1
  return currentChange + 1;
}
// Log output
console.log(nonConstructibleChange([5, 7, 1, 1, 2, 3, 22]));
