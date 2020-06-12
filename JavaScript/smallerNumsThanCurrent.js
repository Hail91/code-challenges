// Return an array containing all numbers smaller than each number in the array.

const smallerNumbersThanCurrent = function (nums) {
  let resArray = [];
  for (let i = 0; i < nums.length; i++) {
    let counter = 0;
    nums.filter((e) => {
      if (e < nums[i]) {
        counter += 1;
      }
    });
    resArray.push(counter);
  }
  return resArray;
};

console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3]));
