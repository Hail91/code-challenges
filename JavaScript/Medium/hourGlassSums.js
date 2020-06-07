function hourglassSum(arr) {
  // Variable to hold sum of each hourglass
  let hourGlassSum = 0;
  // After sum has been calculated, store it here
  let allSums = [];
  let hourGlasses = [];
  // Need to loop over the outer array
  for (let i = 0; i <= 3; i++) {
    // Need an inner loop to track elements of inner arrays
    for (let x = 0; x <= 3; x++) {
      hourGlasses.push(arr[i][x], arr[i][x + 1], arr[i][x + 2]);
      hourGlasses.push(arr[i + 1][x + 1]);
      hourGlasses.push(arr[i + 2][x], arr[i + 2][x + 1], arr[i + 2][x + 2]);
      hourGlassSum = hourGlasses.reduce((a, b) => {
        return a + b;
      });
      allSums.push(hourGlassSum);
      hourGlasses = [];
    }
  }
  return Math.max(...allSums);
}

hourglassSum([
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 0, 2, 4, 4, 0],
  [0, 0, 0, 2, 0, 0],
  [0, 0, 1, 2, 4, 0],
]);
