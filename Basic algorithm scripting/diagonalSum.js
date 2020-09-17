var diagonalSum = function (mat) {
  let sum = 0;
  let left = 0;
  let right = mat[0].length - 1;

  for (let i = 0; i < mat.length; i++) {
    if (left === i && right === i) {
      sum += mat[i][left];
      left += 1;
      right -= 1;
    } else {
      sum += mat[i][left];
      sum += mat[i][right];
      left += 1;
      right -= 1;
    }
  }
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
