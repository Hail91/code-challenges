var majorityElement = function (nums) {
  // Calculate the length of the array
  // Can probably utilize a dictionary to track number of occurrences in the array.
  // Then all we'd need to do is find a value in the dict > n / 2.
  let comparisonNum = nums.length / 2;
  let numHash = {};
  // Populate numHash
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] in numHash) {
      numHash[nums[i]] += 1;
    } else {
      numHash[nums[i]] = 1;
    }
  }
  // Get numHash's values and find value greater than comparisonNum
  for (let [key, value] of Object.entries(numHash)) {
    if (value > comparisonNum) return key;
  }
};

console.log(majorityElement([3, 2, 3]));
