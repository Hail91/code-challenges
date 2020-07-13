function sliceSum(arr, n) {
  // Define sum variable to track sum and return.
  let sum = 0;
  // Loop over array from index zero to n.
  for (let x = 0; x < n; x++) {
    if (n > arr.length) {
      sum = arr.reduce((a, b) => {
        return a + b;
      });
      return sum;
    } else {
      sum += arr[x];
    }
  }
  return sum;
}

console.log(sliceSum([2, 4], 9));
