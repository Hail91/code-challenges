// Need to add comments for clarity to this solution next...
const diagonalSum = function (mat) {
  let sum = 0;
  left = 0;
  right = mat[0].length - 1;
  // Loop Matrix
  for (let i = 0; i < mat.length; i++) {
    // If we meet in the middle
    if (left === i && right === i) {
      // Only add one of the values to sum
      sum += mat[i][left];
      // Update pointers
      left += 1;
      right -= 1;
    } else {
      // Update sum with both pointer values
      sum += mat[i][left];
      sum += mat[i][right];
      // Update pointers
      left += 1;
      right -= 1;
    }
  }
  // Return the sum
  return sum;
};

console.log(
  diagonalSum([
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
  ])
);
