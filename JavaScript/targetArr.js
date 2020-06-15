// Given nums (an array of integers), and index (an array of integers)...return an array with each value of nums inserted at index[i].
const createTargetArray = function (nums, index) {
  let targetArr = [];
  // Loop through nums.length (index will be of same length)
  for (let i = 0; i < nums.length; i++) {
    // splice (index, 0, item to add)
    targetArr.splice(index[i], 0, nums[i]);
  }
  return targetArr;
};

console.log(createTargetArray([0, 1, 2, 3, 4], [0, 1, 2, 2, 1]));
