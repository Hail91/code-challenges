// Add digits of input number together and return sum

function addNums(nums) {
  numsArr = [];
  let sums = 0;
  nums = nums.replace(/[ ,.]/g, "");
  numsArr.push(nums);
  for (let i = 0; i < nums.length; i++) {
    sums += Number(nums[i]);
  }
  return sums;
}

console.log(addNums("10"));
