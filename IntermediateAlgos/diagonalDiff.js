function diagonalDifference(arr) {
  // Need variables for sum of first diagonal and secondary diagonal.
  let primary = 0;
  let secondary = 0;
  let primaryCount = 0;
  let secondaryCount = arr.length - 1;
  // Loop over matrix to retrieve sum of primary diagonal.
  for (let p = 0; p < arr.length; p++) {
    // Need to add first value of first subArr.
    primary += arr[p][primaryCount];
    primaryCount += 1;
  }
  // Loop again for secondary
  for (let s = 0; s < arr.length; s++) {
    secondary += arr[s][secondaryCount];
    secondaryCount -= 1;
  }
  let difference = primary - secondary;
  return Math.abs(difference);
}

console.log(
  diagonalDifference([
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12],
  ])
);
