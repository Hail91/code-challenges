// Main function that accepts the input array and target integer
function binarySearch(array, target) {
  // Start at 0 and run through the end of the array, (we move the actual pointers in helper itself)
  return binarySearchHelper(array, target, 0, array.length - 1);
}
// Helper function that performs the actual logic of parsing through array
function binarySearchHelper(array, target, left, right) {
  // While we have not hit every element in the array
  while (left <= right) {
    // Calculate the middle value
    const mid = Math.floor((left + right) / 2);
    // Set the match equal to the middle value
    const match = array[mid];
    // If the target integer is equal to the match we've set, return that value (It's actually the index of the value)
    if (target === match) {
      return mid;
      // Otherwise, if the target is smaller, chop off everything to the right. (since it cannot be on that side)
    } else if (target < match) {
      right = mid - 1;
      // Otherwise, if the target is larger, chop off everything to the left. (since it cannot be on the left side)
    } else {
      left = mid + 1;
    }
  }
  // If we make it all the way though without returning a match, return 'Item not found!'.
  return "Item not found!";
}
// Log output
console.log(binarySearch([1, 5, 23, 111], 23));
