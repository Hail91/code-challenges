/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  let pointer = 0;
  let window = [];
  let answerArray = [];

  if (nums.length === 1 && k === nums.length) {
    return nums;
  }
  if (k === nums.length) {
    answerArray.push(Math.max(...nums));
    return answerArray;
  }
  // Now execute the logic
  while (nums[pointer + k - 1] !== undefined) {
    window = nums.slice(pointer, pointer + k);
    // Get index of max value
    // Get Max value from that window
    answerArray.push(Math.max(...window));
    // Increment pointer and wipe out tempArray.
    pointer += 1;
    // reset window
    window.length = 0;
  }
  return answerArray;
};

// Get index of maxValue
// Check if maxValue of next window has the same index in nums
// if so, the push that value into answerArray and skip pointer ahead k
