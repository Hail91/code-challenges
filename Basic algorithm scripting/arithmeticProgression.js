var canMakeArithmeticProgression = function (arr) {
  // Sort input array
  arr = arr.sort((a, b) => a - b);
  // Get initial difference between 2 values
  let diff = arr[1] - arr[0];
  // Loop array and check for that value between every array pair
  for (let i = 0; i < arr.length - 1; i++) {
    // If the next pair doesn't meet established diff, return false
    if (arr[i + 1] - arr[i] !== diff) return false;
  }
  return true;
};
// Log output
console.log(canMakeArithmeticProgression([3, 5, 1]));
