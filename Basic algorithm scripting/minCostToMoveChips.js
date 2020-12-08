/**
 * @param {number[]} position
 * @return {number}
 */
var minCostToMoveChips = function(position) {
    let evens = 0
    let odds = 0
    position.forEach((cV, index) => {
        index % 2 === 0 ? evens += 1 : odds += 1
    })
    return Math.min(evens, odds)
 };