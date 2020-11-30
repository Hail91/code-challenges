/**
 * @param {number[]} nums
 * @return {number}
 */
const arrayPairSum = function (nums) {
  // Sort array to make grabbing minimum of pairs much simpler
  nums.sort((a, b) => a - b);
  // instantiate variable to track min
  let output = 0;
  // Loop over nums two at a time since we're dealing with PAIRS. (2n)
  for (let i = 0; i < nums.length; i += 2) {
    // Append to output, we know we're always getting the minimum for each pair since array is sorted.
    output += nums[i];
  }
  // Return after we parse the entire array
  return output;
};
// Log output
console.log(arrayPairSum([6, 2, 6, 5, 1, 2]));
