// Return difference between largest and smallest number in input array

function difference(nums) {
  min = Math.min(...nums);
  max = Math.max(...nums);
  result = max - min;
  return result;
}

console.log(difference([1, 3, 5, 9, 0]));
