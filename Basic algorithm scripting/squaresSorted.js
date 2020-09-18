var sortedSquares = function (A) {
  A.forEach((el, index, arr) => {
    return (arr[index] = Math.pow(el, 2));
  });
  return A.sort((a, b) => a - b);
};

console.log(sortedSquares([-4, -1, 0, 3, 10]));
