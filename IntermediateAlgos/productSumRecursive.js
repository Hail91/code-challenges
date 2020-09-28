function productSum(array, depth = 1) {
  // Need variable to hold current depth
  let sum = 0;
  // Loop over input array
  for (let i = 0; i < array.length; i++) {
    // If value is not an array, add the value to sum
    if (typeof array[i] !== "object") {
      sum += array[i];
    } else {
      sum += productSum(array[i], depth + 1);
    }
  }
  return sum * depth;
}

console.log(productSum([5, 2, [7, -1], 3, [6, [-13, 8], 4]]));
