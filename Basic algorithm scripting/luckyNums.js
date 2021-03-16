var luckyNumbers = function (matrix) {
  // Map over Matrix of numbers returning an array of the minimum from each matrix subArray
  let min = matrix.map((x) => Math.min(...x));
  // Repeat for first Subarray of matrix, returning the max of each value from first SubArray Matrix
  let max = matrix[0].map((_, i) => Math.max(...matrix.map((x) => x[i])));
  // Filter min by values that also exist in Max.
  return min.filter((x) => max.includes(x));
};
