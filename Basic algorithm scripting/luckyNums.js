var luckyNumbers = function (matrix) {
  let min = matrix.map((x) => Math.min(...x));
  let max = matrix[0].map((_, i) => Math.max(...matrix.map((x) => x[i])));
  return min.filter((x) => max.includes(x));
};
