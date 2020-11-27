// ** TRASH ATTEMPT, NOT WORKING **
const arrayPairSum = function (nums) {
  let arrHash = {};
  let start = 0;
  let end = nums.length - 1;
  // For every element in nums, populate a hashtable with a key/value: array
  for (let i = 1; i < nums.length; i++) {
    arrHash[i] = []; // 1: [1, 4], [2, 3] // 2: [1, 3], [2, 4] 3: [1, 2], [3, 1]
    while (arrHash[i].length < nums.length / 2) {
      // Need to push first valid pair set
      if (end - i === 0) {
        end -= 1;
        arrHash[i].push(
          [nums[start], nums[start + i]],
          [nums[end], nums[end - 1]]
        );
      } else {
        arrHash[i].push(
          [nums[start], nums[start + i]],
          [nums[end], nums[end - i]]
        );
      }
    }
  }
};

console.log(arrayPairSum([6, 2, 6, 5, 1, 2]));
