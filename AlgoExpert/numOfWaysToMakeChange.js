// Time Complexity: O(nd) where n is the number of values and d is the number of denominations we have.
// Space complexity: O(n) where n is the number of values we have to check
function numberOfWaysToMakeChange(n, denoms) {
  // Define an array of all possible dollar amounts to make up to n with each 'denom' of 'denoms'
  let possibilities = new Array(n + 1).fill(0);
  // Set first value to 1, since there is only one way to make no change (using no coins)
  possibilities[0] = 1;
  // For each denom in denoms input array
  for (let denom of denoms) {
    // Loop over every possible value to make for every 'denom' in 'denoms' input array
    for (let currentAmount = 1; currentAmount < n + 1; currentAmount++) {
      // If the denom is less than or equal to the currentAmount
      if (denom <= currentAmount) {
        // Add the the value and the value at possibilities at position 'currentAmount - denom'
        // This approach uses dynamic programming to build up outcomes as we check each value to make with each denom
        possibilities[currentAmount] += possibilities[currentAmount - denom];
      }
    }
  }
  // Return all the possibilities collected throughout all our iterations
  return possibilities[n];
}
// Log output
console.log(numberOfWaysToMakeChange(10, [1, 5, 10, 25]));
