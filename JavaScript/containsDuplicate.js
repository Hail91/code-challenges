// Check if an array contains duplicate integers

const containsDuplicate = function (nums) {
  let result = new Set(nums);
  return result.size !== nums.length;
};

console.log(containsDuplicate([1, 2, 4, 2, 6]));
