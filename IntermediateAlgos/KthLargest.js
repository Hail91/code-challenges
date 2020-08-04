// Return 'kth' largest Element from input array(nums)
function kthLargestElement(nums, k) {
  let maxVal = Math.max(...nums);
  let count = 0;
  // If k === nums.length, that means want the smallest number in the array, so return that.
  if (nums.length === k) {
    return Math.min(...nums);
  }
  // Otherwise, continue with our logic to remove and check
  while (count < k - 1) {
    nums.splice(nums.indexOf(maxVal), 1);
    maxVal = Math.max(...nums);
    count += 1;
  }
  return Math.max(...nums);
}
