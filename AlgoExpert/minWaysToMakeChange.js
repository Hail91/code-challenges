/* NOT WORKING AS INTENDED */
function minNumberOfCoinsForChange(n, denoms) {
  let ways = 0;
  let currentMax = -Infinity;
  if (n === 0) return 0; // Zero ways to make zero cents
  // Sort denoms array from largest denoms to smallest denoms
  denoms.sort((a, b) => b - a);
  // [10, 5, 1] n = 10
  // Use the largest denoms first (as many as possible) until it's larger than our remaining change to make
  for (let i = 0; i < denoms.length; i++) {
    currentMax = denoms[i];
    while (n >= currentMax) {
      n -= currentMax;
      ways += 1;
    }
    if (n === 0) return ways;
    // Move to next denom
    else continue;
  }
  // If we make it all the way to the smallest and cannot reach exactly zero, return -1
  return -1;
}
// Log output
console.log(minNumberOfCoinsForChange(9, [3, 5]));
