// Flagged approach to bubble sort, helps reduce time complexity in another otherwise very slow sorting algorithm
// Time Complexity: O(n^2) where 'n' is length of array, could even be worse than this, but it's definitely exponential time.
// Space Complexity: O(1)
function bubbleSort(array) {
  // Set Boolean Flag to check if array is sorted, initially it's false.
  let sorted = false;
  // Loop while we say we've sorted something
  while (sorted !== true) {
    // Flip to true before we start swapping
    sorted = true;
    // Loop array
    for (let i = 0; i < array.length; i++) {
      // Check pairs, if we have something out of order, swap it and flip the boolean flag
      if (array[i] > array[i + 1]) {
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
        sorted = false;
        // If we're in order, just continue
      } else if (array[i] <= array[i + 1]) {
        continue;
      }
    }
  }
}
console.log(bubbleSort([8, 5, 2, 9, 5, 6, 3]));
