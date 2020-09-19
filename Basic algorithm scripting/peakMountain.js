var peakIndexInMountainArray = function (A) {
  return A.indexOf(Math.max(...A));
};

console.log(peakIndexInMountainArray([0, 1, 0]));
