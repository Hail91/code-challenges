// Flagged approach to bubble sort, helps reduce time complexity in another otherwise very slow sorting algorithm
// Time Complexity: O(n^2) where 'n' is length of array, could even be worse than this, but it's definitely exponential time.
// Space Complexity: O(1)
function bubbleSort(array) {
  let sorted = false;
  while (sorted !== true) {
    sorted = true;
    for (let i = 0; i < array.length; i++) {
      if (array[i] > array[i + 1]) {
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
        sorted = false;
      } else if (array[i] <= array[i + 1]) {
        continue;
      }
    }
  }
}
console.log(bubbleSort([8, 5, 2, 9, 5, 6, 3]));
