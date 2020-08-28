var runningSum = function (nums) {
  // Will need to output a results array
  let results = [nums[0]];
  // Loop over nums and slice nums from pointer to i(inclusive)
  for (let i = 0; i < nums.length; i++) {
    if (i === 0) continue;
    else {
      let slicedArr = nums.slice(0, i + 1);
      // Then reduce the sliced array and push that value to results array.
      results.push(slicedArr.reduce((a, b) => a + b));
    }
  }
  return results;
};

console.log(runningSum([1, 2, 3, 4]));
