// Determine maximum absolute difference between adjacent array elements!
function arrayMaximalAdjacentDifference(inputArray) {
  // Store max diff in a variable
  let maxDiff = Math.abs(inputArray[0] - inputArray[1]);
  // Loop over Array calculating maxDiff and replacing when necessary
  for (let i = 1; i < inputArray.length; i++) {
    if (Math.abs(inputArray[i] - inputArray[i + 1]) > maxDiff) {
      maxDiff = Math.abs(inputArray[i] - inputArray[i + 1]);
    } else {
      continue;
    }
  }
  return maxDiff;
}

console.log(arrayMaximalAdjacentDifference([2, 4, 1, 0]));
