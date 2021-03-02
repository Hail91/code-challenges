function arrayMaxConsecutiveSum(inputArray, k) {
  let maxSum = 0;
  let count = 0;
  for (let i = 0; i + k <= inputArray.length; i++) {
    let sum = inputArray[i];
    while (count < k - 1) {
      count += 1;
      sum += inputArray[i + count];
    }
    if (sum > maxSum) maxSum = sum;
    count = 0;
  }
  return maxSum;
}
// Log output
console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 2));
