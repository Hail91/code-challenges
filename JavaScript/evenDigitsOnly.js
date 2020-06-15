// Return total num of integers from nums array whose total number of digits is even only.
const findNumbers = function (nums) {
  // variable to hold number of even digited nums
  let resNum = 0;
  // Need to loop over nums array and convert each int to a string and then check length
  for (let i = 0; i < nums.length; i++) {
    let numString = nums[i].toString();
    // The increment resNum when length is even
    if (numString.length % 2 === 0) {
      resNum += 1;
    } else {
      continue;
    }
  }
  return resNum;
};

console.log(findNumbers([12, 345, 2, 6, 7896]));
