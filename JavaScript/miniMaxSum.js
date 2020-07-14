function miniMaxSum(arr) {
  // Sort array from smallest to largest
  arr.sort((a, b) => a - b);
  // Grabbing first 4 integers will result in smallest sum
  let minArr = arr.slice(0, 4);
  // Grabbing last 4 will result in largest sum
  let maxArr = arr.slice(1, 5);
  // Once we have both sums, print both to the console.
  let minSum = minArr.reduce((a, b) => a + b);
  let maxSum = maxArr.reduce((a, b) => a + b);
  console.log(minSum, maxSum);
}

console.log(miniMaxSum([1, 2, 3, 4, 5]));
