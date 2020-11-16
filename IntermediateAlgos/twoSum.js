function twoNumberSum(array, targetSum) {
  // Sort Array (This implementation only works if it is sorted)
  array.sort((a, b) => a - b);
  // Initialize two pointers
  let left = 0;
  let right = array.length - 1;
  // While loop that checks values of pointers summed together
  while (left < right) {
    // Determine sum of pointers
    let sum = array[left] + array[right];
    // If sum equals targetSum
    if (sum === targetSum) {
      // Return those values
      return [array[left], array[right]];
    }
    // If Sum is less than the target
    if (sum < targetSum) {
      // Increment to the next value in array (ascending since it cannot be less under these circumstances)
      left += 1;
      // Otherwise, shift the right pointer down (to the left, since it cannot be more than what we calculated sum to be)
    } else right -= 1;
  }
  // If no values add up to target, return empty array
  return [];
}

console.log(twoNumberSum([1, 3, 5, 7, 9], 14));
