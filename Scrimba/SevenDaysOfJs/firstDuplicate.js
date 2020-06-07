function firstDuplicate(nums) {
  // Could create a dictionary to store values and num of occurrences
  let numDict = {};
  let occurrences = 1;
  // While we're looping through the array, if at any point we add a SECOND occurrence of a value, immediately return that value out of the function and leave the loop.
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] in numDict) {
      numDict[nums[i]] = occurrences + 1;
      return Number(
        Object.keys(numDict).find((key) => numDict[key] === numDict[nums[i]])
      );
    } else {
      numDict[nums[i]] = occurrences;
    }
  }
  // If no duplicates are found, return -1
  return -1;
}

console.log(firstDuplicate([1, 2, 3, 4, 3]));
