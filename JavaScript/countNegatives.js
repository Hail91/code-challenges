var countNegatives = function (grid) {
  return grid.flat().filter((el) => el < 0).length;
};

console.log(
  countNegatives([
    [1, 2, -1],
    [2, 4, -3],
    [-5, -6, -7],
  ])
);
