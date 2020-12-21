// Selection Sort here....
// const selectionSort = (array) => {
//   // Maintain two subArrays, one 'unsorted', and another 'sorted'.
//   let sorted = [];
//   let unsorted = array.slice();
//   // Start sorted array by grabbing smallest element from unsorted and pushing to front of sorted.
//   for (let i = 0; i < array.length; i++) {
//     sorted.push(Math.min(...unsorted));
//     unsorted.splice(unsorted.indexOf(Math.min(...unsorted)), 1);
//   }
//   return sorted;
// };

// console.log(selectionSort([2, 5, 7, 1, 4, 3, 9, 6, 10]));

// ^^ Above implemention works but is not a proper selectionSort, will rewrite to only use one array.

const selectionSort = (array) => {
  // Use sliding window to slice array and slice to grab the minimum value
  // unshift the min value to the front of array
  // Move the window and repeat.
  // Do this until array is sorted.
};

console.log(selectionSort([2, 5, 7, 1, 4, 3, 9, 6, 10]));
