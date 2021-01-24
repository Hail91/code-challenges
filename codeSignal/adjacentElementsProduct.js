function adjacentElementsProduct(inputArray) {
  // Loop over input array and return greatest pair product
  let sums = inputArray.map((el, index, array) => {
    // If we've hit the last element, return undefined to sum array
    if (index === array.length - 1) return;
    // Other wise, multiply the array pair and return into the sums array
    else return array[index] * array[index + 1];
  });
  // Filter out the undefined value
  let output = sums.filter((el) => el !== undefined);
  // Return the maximum value
  return Math.max(...output);
}
console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));
