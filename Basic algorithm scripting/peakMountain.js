var peakIndexInMountainArray = function (A) {
  // Return the index of the tallest point of 'mountain' array
  return A.indexOf(Math.max(...A));
};
// Log output
console.log(peakIndexInMountainArray([0, 1, 0]));
