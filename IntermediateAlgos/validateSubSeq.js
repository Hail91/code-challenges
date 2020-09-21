function isValidSubsequence(array, sequence) {
  // Initialize index pointers
  let arrayIndex = 0;
  let seqIndex = 0;
  // While We haven't traversed each entire array
  while (arrayIndex < array.length && seqIndex < sequence.length) {
    if (array[arrayIndex] === sequence[seqIndex]) {
      seqIndex += 1;
    }
    arrayIndex += 1;
  }
  return seqIndex === sequence.length;
}

console.log(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10]));
