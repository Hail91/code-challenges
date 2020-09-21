function twoNumberSum(array, targetSum) {
  // Initialize two pointers
  array.sort((a, b) => a - b);
  let left = 0;
  let right = array.length - 1;
  // While loop that checks values of pointers summed together
  while (left < right) {
    let sum = array[left] + array[right];
    if (sum === targetSum) {
      return [array[left], array[right]];
    }
    if (sum < targetSum) {
      left += 1;
    }
    if (sum > targetSum) {
      right -= 1;
    }
  }
  return [];
}
