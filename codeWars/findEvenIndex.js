/* Brute Force */
function findEvenIndex(arr) {
  let leftSide, rightSide;
  // Iterate through input array
  for (let idx = 0; idx < arr.length; ++idx) {
    // Slice array on left and right of current index and calculate sum
    leftSide = arr.slice(0, idx).reduce((a, b) => a + b, 0);
    rightSide = arr.slice(idx + 1, arr.length + 1).reduce((a, b) => a + b, 0);
    // Check if sums match, if so...return index
    if (leftSide === rightSide) return idx;
    // Otherwise, keep iterating
    else continue;
  }
  // If it's not possible, return -1
  return -1;
}
// Log output
console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1]));

// Faster Solution
function findEvenIndexFaster(arr) {
  let leftSide = 0;
  let rightSide = arr.reduce((a, b) => a + b);
  // Iterate over the array incrementing the left side as long as we're not on zero
  for (let idx = 0; idx < arr.length; ++idx) {
    if (idx) leftSide += arr[idx];
    else leftSide += arr[idx];
    // check if they match
    if (leftSide === rightSide) return idx;
    // If not, decrement rightSide and keep working
    else rightSide -= arr[idx];
  }
  // Return -1 if not found
  return -1;
}
// Log output
console.log(findEvenIndexFaster([1, 2, 3, 4, 3, 2, 1]));
