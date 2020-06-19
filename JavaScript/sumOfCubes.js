// Take an array of integers and return the sum of their cubed values (nums[i]^3).
function sumOfCubes(nums) {
  if (nums.length === 0) {
    return 0;
  }
  nums.forEach((val, index) => {
    return (nums[index] = Math.pow(val, 3));
  });
  let res = nums.reduce((a, b) => a + b);
  return res;
}

console.log(sumOfCubes([1, 5, 9]));
