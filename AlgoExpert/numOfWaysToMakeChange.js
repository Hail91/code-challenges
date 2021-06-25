// Time Complexity: O(nd) where n is the number of values and d is the number of denominations we have.
// Space complexity: O(n) where n is the number of values we have to check
function numberOfWaysToMakeChange(n, denoms) {
  let possibilities = new Array(n + 1).fill(0);
  possibilities[0] = 1;
  for (let denom of denoms) {
    for (let currentAmount = 1; currentAmount < n + 1; currentAmount++) {
      if (denom <= currentAmount) {
        possibilities[currentAmount] += possibilities[currentAmount - denom];
      }
    }
  }
  return possibilities[n];
}
// Log output
console.log(numberOfWaysToMakeChange(10, [1, 5, 10, 25]));
