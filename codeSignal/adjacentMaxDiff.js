function arrayMaximalAdjacentDifference(inputArray) {
  // Map over the input array
  let adjacentMaxes = inputArray.map((num, index, array) => {
    // If we're on the last element, simply return
    if (index === array.length - 1) return;
    // Otherwise, return the absolute value between the current value and the next value
    return Math.abs(array[index] - array[index + 1]);
  });
  // After we've mapped over the array calculating the differences between each value
  // Filter out the last undefined value and return the greatest difference
  return Math.max(...adjacentMaxes.filter((num) => num !== undefined));
}
// Log output
console.log(arrayMaximalAdjacentDifference([2, 10, -4, 6, 3, -2, 1]));
