function matrixElementsSum(matrix) {
  // Loop over 2D array matrix
  // Set global variable for sum
  let k = 0;
  let sum = 0;
  let count = 0;
  let tempColumns = [];
  for (let i = 0; i < matrix[0].length; i++) {
    tempColumns.length = 0;
    while (tempColumns.length !== matrix.length) {
      if (k <= matrix.length) {
        tempColumns.push(matrix[k][count]);
        k++;
      }
    }
    // Loop over tempColumns and increment sum as necessary
    for (let x = 0; x < tempColumns.length; x++) {
      if (tempColumns[x] !== 0) {
        sum += tempColumns[x];
      } else if (tempColumns[x] === 0) {
        // Then clear tempColumns
        tempColumns.length = 0;
        // Reset i and count
        k = 0;
      }
    }
    k = 0;
    count += 1;
  }
  return sum;
}

console.log(
  matrixElementsSum([
    [1, 1, 1],
    [2, 2, 2],
    [3, 3, 3],
  ])
);
