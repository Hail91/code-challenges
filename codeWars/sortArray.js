function sortArray(array) {
  let currOdd, currOddIdx;
  // Iterate through array
  for (let idx = 0; idx < array.length; ++idx) {
    // Check if number is odd
    if (array[idx] % 2 !== 0) {
      // next time we hit an odd number, check if it's smaller than the current odd
      if (idx > 0 && array[idx] < currOdd) {
        // if it is, swap it's index position with our stored index
        [array[currOddIdx], array[idx]] = [array[idx], array[currOddIdx]];
        return sortArray(array);
      } else {
        currOdd = array[idx];
        currOddIdx = idx;
      }
    }
  }
  return array;
}
// Log output
console.log(sortArray([5, 3, 1, 8, 0]));
