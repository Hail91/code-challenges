function arrayMaxConsecutiveSum(inputArray, k) {
  // If the passed value for 'k' exceeds the array length, it's not possible to calculate a consectiveSum of that length
  if (k > inputArray.length) {
    return 0;
  }
  // Track maxSum so we have something to compare the currentSum against
  let maxSum = 0;
  // Keep a count variable that we use to determine when we've hit our desired iterations inside loop
  let count = 0;
  // Loop over array while we have at least k more elements to hit
  for (let i = 0; i + k <= inputArray.length; i++) {
    // Track the currentSum in the loop
    let currentSum = inputArray[i];
    // Run inner loop 'k' times and calculate the sum on each pass
    while (count < k - 1) {
      count += 1;
      currentSum += inputArray[i + count];
    }
    // If our calculated currentSum is > than maxSum, reassign maxSum
    if (currentSum > maxSum) maxSum = currentSum;
    // Reset count for next iteration (count is a temporary variable that the inner loop relies on)
    count = 0;
  }
  // return the maximum calculated sum
  return maxSum;
}
// Log output
console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 2));
