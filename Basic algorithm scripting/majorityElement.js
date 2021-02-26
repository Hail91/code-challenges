var majorityElement = function (nums) {
  // Instantiate Hashtable to track element occurrence
  let numHash = {};
  // Loop input array
  for (let i = 0; i < nums.length; i++) {
    // Increment element occurrence in hashtable if it's already in there
    if (nums[i] in numHash) numHash[nums[i]] += 1;
    else numHash[nums[i]] = 1;
  }
  let maxOccurring = Math.max(...Object.values(numHash));
  // Loop over the object and find the highest value to return
  for (let [key, value] of Object.entries(numHash)) {
    if (value === maxOccurring) return key;
  }
};
// Log output
console.log(majorityElement([3, 2, 3, 7, 6, 9, 9, 9]));
