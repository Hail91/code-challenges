function integerBreak(int) {
  // If the passed in number is less than or equal to 3, the maximum possible product of numbers that would sum to achieve it is int - 1
  if (int <= 3) {
    return int - 1;
  }
  // Instantiate array in range of 0 to int
  let dp = [...Array(int + 1).keys()];
  // We only want to worry about 2s and 3s
  // Iterate over dp array from 4 to int + 1 (We start at 4 because any value < 4 is already handled by the initial if above)
  for (let i = 4; i < int + 1; ++i) {
    // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10] <--- Array we're working on (start at 4)
    // Calculate the Integer break for every value starting at 4
    // Use previously calculated integer break as we move through (use sub-problem approach)
    dp[i] = Math.max(dp[i - 2] * 2, dp[i - 3] * 3);
    // (2 * 2) --> 4, (3 * 1) --> 3 (1st Iteration) <-- Products must add to 4
    // (3 * 2) --> 6, (2 * 3) --> 6 (2nd Iteration) <-- Products must add to 5
    // (4 * 2) --> 8, (3 * 3) --> 9 (3rd Iteration) <-- Products must add to 6
    // (5 * 2) --> 10, (4 * 3) --> 12 (4th Iteration) <-- Products must add to 7
    // (6 * 2) --> 12, (5 * 3) --> 15 (5th Iteration) <-- Products must add to 8
    // (7 * 2) --> 14, (6 * 3) --> 18 (6th Iteration) <-- Products must add to 9
    // (8 * 2) --> 16, (7 * 3) --> 21, (7th Iteration) <-- Products must add to 10
  }
  // Return array at int (since we've built up to the max potential product of values that add up to int)
  return dp[int];
}

console.log(integerBreak(10));
