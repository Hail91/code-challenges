function arrayMaximalAdjacentDifference(inputArray) {
  let adjacentMaxes = inputArray.map((num, index, array) => {
    if (index === array.length - 1) return;
    return Math.abs(array[index] - array[index + 1]);
  });
  return Math.max(...adjacentMaxes.filter((num) => num !== undefined));
}
// Log output
console.log(arrayMaximalAdjacentDifference([2, 10, -4, 6, 3, -2, 1]));
