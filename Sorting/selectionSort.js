// Selection Sort here...
const selectionSort = (array) => {
  // Loop input array
  for (let i = 0; i < array.length; i++) {
    // Establish a window to look at (this will shrink as we traverse, it starts as a full copy of input array)
    let windowArray = array.slice(i);
    // Remove minimum element from current window from the array starting at 'position' i, this will cover cases where we have duplicates
    // Not consecutive in array
    array.splice(array.indexOf(Math.min(...windowArray), i), 1);
    // Add that value back into arry at position i
    array.splice(i, 0, Math.min(...windowArray));
  }
  // Once we've traversed the entire array, return it sorted.
  return array;
};
console.log(selectionSort([2, 5, 7, 1, 4, 3, 9, 6, 10, 3]));
