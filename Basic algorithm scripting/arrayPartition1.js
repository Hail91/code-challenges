/**
 * @param {number[]} nums
 * @return {number}
 */
const arrayPairSum = function (nums) {
  // Sort array
  nums.sort((a, b) => a - b);
  // instantiate variable to track min
  let output = 0;
  // Loop over nums two at a time since we're dealing with PAIRS. (2n)
  for (let i = 0; i < nums.length; i += 2) {
    output += nums[i];
  }
  return output;
};

console.log(arrayPairSum([6, 2, 6, 5, 1, 2]));
