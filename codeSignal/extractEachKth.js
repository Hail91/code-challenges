function extractEachKth(inputArray, k) {
  // Set offset because we'll be modifying array in place.
  let offset = 1;
  // Extract length, again...because during iteration the length will change due to splice.
  let len = inputArray.length;
  for (let i = 0; i <= len; i) {
    // Skip initial iteration k times
    if (i === 0) i += k;
    else {
      // Splice value at index - the offset value
      inputArray.splice(i - offset, 1);
      // Bump up index
      i += k;
      // Increment offset everytime a value is removed to keep consistency
      offset += 1;
    }
  }
  // Return modified array
  return inputArray;
}
// Log output
console.log(extractEachKth([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));
