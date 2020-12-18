// Selection Sort here....
const selectionSort = (array) => {
  // Maintain two subArrays, one 'unsorted', and another 'sorted'.
  let sorted = [];
  let unsorted = array.slice();
  // Start sorted array by grabbing smallest element from unsorted and pushing to front of sorted.
  for (let i = 0; i < array.length; i++) {
    sorted.push(Math.min(...unsorted));
    unsorted.splice(unsorted.indexOf(Math.min(...unsorted)), 1);
  }
  return sorted;
};

console.log(selectionSort([2, 5, 7, 1, 4, 3, 9, 6, 10]));
