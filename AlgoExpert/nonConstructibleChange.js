// Time Complexity: O(n) worst case where n is the length of the coins array
// Space Complexity: O(1) constant space, sort occurs in-place and we use a variable to track output
function nonConstructibleChange(coins) {
  let currentChange = 0;
  coins.sort((a, b) => a - b);
  for (let i = 0; i < coins.length; ++i) {
    if (coins[i] > currentChange + 1) {
      return currentChange + 1;
    } else {
      currentChange += coins[i];
    }
  }
  return currentChange + 1;
}
// Log output
console.log(nonConstructibleChange([5, 7, 1, 1, 2, 3, 22]));
