/**
 * @param {number[]} position
 * @return {number}
 */
const minCostToMoveChips = function (position) {
  // Set number of evens and odds initially
  let evens = 0;
  let odds = 0;
  // Loop over position array
  position.forEach((cV, index) => {
    // If the position we're on is an even number, increment events, else...increment odds
    position[index] % 2 === 0 ? (evens += 1) : (odds += 1);
    // Repeat for every value in position array
  });
  // Return the minimum value of the costs associated with moving an even or an odd values
  return Math.min(evens, odds);
};
// Log output
console.log(minCostToMoveChips([2, 2, 2, 3, 3]));
