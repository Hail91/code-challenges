var shuffle = function (nums, n) {
  // Brute force first
  let result = [];
  // slice array from n to nums.length - 1
  let slicedArr = nums.slice(n, nums.length + 1);
  // Loop from 0 to n, insert values from both arrays
  for (let i = 0; i < n; i++) {
    result.push(nums[i]);
    result.push(slicedArr[i]);
  }
  // return result array
  return result;
};

console.log(shuffle([2, 5, 1, 3, 4, 7]));
