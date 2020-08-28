var numIdenticalPairs = function (nums) {
  let good = 0;
  let e = 0;
  // While e < nums.length
  while (e < nums.length) {
    // Loop over nums looking for duplicates
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] === nums[e] && e < i) {
        good += 1;
      }
    }
    e += 1;
  }
  return good;
};

console.log(numIdenticalPairs([1, 2, 3, 1, 1, 3]));
