const findDuplicate = function (nums) {
  // Create a new set which will return only the unique values
  let dict = {};
  let count = 1;
  let result = null;
  for (let x = 0; x < nums.length; x++) {
    if (nums[x] in dict) {
      dict[nums[x]] = count + 1;
    } else {
      dict[nums[x]] = count;
    }
  }
  // Loop over all keys in dict
  for (let [key, value] of Object.entries(dict)) {
    if (value > 1) {
      result = key;
    }
  }
  return result;
};

console.log(findDuplicate([3, 1, 3, 4, 2]));
