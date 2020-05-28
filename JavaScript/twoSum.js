// Return the 2 values in input array that add up to the target input

var twoSum = function (nums, target) {
  // for(let i = 0; i < nums.length; i++) {  <----- Brute force solution, very slow as input size increase. O(n^2)
  //    for(let x = i + 1; x < nums.length; x++) {
  //        if(nums[i] + nums[x] === target) {
  //            return [i, x]
  //        }
  //    }
  // }
  // ----------------------------------------------------
  // Initialize a hashmap(object)
  let dict = {};
  // Loop over nums array and add values to dict
  for (let i = 0; i < nums.length; i++) {
    let numsVal = nums[i];
    dict[numsVal] = i;
  }
  for (let x = 0; x < nums.length; x++) {
    let difference = target - nums[x];
    if (dict.hasOwnProperty(difference) && dict[difference] !== x) {
      return [x, dict[difference]];
    }
  }
  return "No possible addition of two numbers to equal requested target";
};

console.log(twoSum([2, 7, 11, 15], 26));
