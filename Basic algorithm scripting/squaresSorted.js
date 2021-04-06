// This approach works but it's O(n^2) as it requires us to iterate over the array twice, (once in forEach, then again when we sort)
const sortedSquares = function (A) {
  // Iterate over each element returning the square of that element
  A.forEach((el, index, arr) => {
    return (arr[index] = Math.pow(el, 2));
  });
  // Return sorted array
  return A.sort((a, b) => a - b);
};
// Log output
console.log(sortedSquares([-4, -1, 0, 3, 10]));

// A better O(n) solution using pointers
function sortedSquaresFaster(array) {
  // Use empty array for output
  const output = [];
  // Set Left pointer to beginning of array
  let leftPointer = 0,
    // Initialize right pointer to the end of the array
    rightPointer = array.length - 1,
    // Store length of array (Determines when we will stop iterating)
    length = array.length - 1;
  // While the length >= 0 (While we haven't traversed the entire array)
  while (length >= 0) {
    // Check if value at left pointer is larger than value at right pointer
    if (Math.abs(array[leftPointer]) > Math.abs(array[rightPointer])) {
      // If so, square the larger value
      output[length] = array[leftPointer] * array[leftPointer];
      // Increment left pointer
      leftPointer += 1;
      // Decrement length (Shift right pointer to the right)
      length -= 1;
      // Otherwise the value at left pointer is smaller
    } else {
      // Square the smaller value
      output[length] = array[rightPointer] * array[rightPointer];
      // decrement rightPointer
      rightPointer -= 1;
      // Decrement length
      length -= 1;
    }
  }
  // Return the output (should be sorted due to order of calculations performed)
  return output;
}
// Log output
console.log(sortedSquaresFaster([-4, -1, 0, 3, 10]));
