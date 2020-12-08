/**
 * @param {number[]} position
 * @return {number}
 */
const minCostToMoveChips = function (position) {
  let evens = 0;
  let odds = 0;
  position.forEach((cV, index) => {
    position[index] % 2 === 0 ? (evens += 1) : (odds += 1);
  });
  return Math.min(evens, odds);
};

console.log(minCostToMoveChips([2, 2, 2, 3, 3]));
