// Insertion sort implementation using the 'playing cards' approach, one array['sorted'] and another['unsorted']
function insertionSort(array) {
  // Establish sorted array with first array value (any array of 1 value is sorted by default)
  let sorted = [array[0]];
  // Grab everything after the first value and use them to establish your 'unsorted' array
  let unsorted = array.slice(1);
  // While there are still values in unsorted array
  while (unsorted.length > 0) {
    // Loop the sorted array
    for (let i = 0; i < sorted.length; i++) {
      // Check if the first value in unsorted is smaller than the first value in sorted
      if (unsorted[0] < sorted[i - i]) {
        // If so, add it to 'sorted' in the correct position relative to what is already in sorted array
        sorted.splice(0, 0, unsorted[0]);
        // Remove it from unsorted
        unsorted.splice(0, 1);
        // Otherwise, if the value in unsorted is greater than the first value in sorted
      } else if (unsorted[0] >= sorted[i - i]) {
        // Establish a pointer to front of sorted array
        let count = 0;
        // Loop through sorted until we hit a value that unsorted[0] is NOT bigger than while tracking the pointer position
        while (unsorted[0] > sorted[count]) {
          count += 1;
        }
        // Once we break out of the while loop, we've found where we need to insert
        sorted.splice(count, 0, unsorted[0]);
        // Remove from unsorted
        unsorted.splice(0, 1);
      }
    }
  }
  // Logic above repeats until we've sorted the array, return sorted array.
  return sorted;
}
console.log(insertionSort([2, 5, 7, 3, 1, 0, 9, 14]));
