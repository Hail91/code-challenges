var rangeSumBST = function (root, L, R) {
  // Define variable to track the sum (initialize to 0)
  let sum = 0;
  // Loop over the root array
  for (let i = 0; i < root.length; i++) {
    // Condition to check if the value we're looking at is equal to or greater than L and equal to or less than R
    if (root[i] >= L && root[i] <= R) {
      sum += root[i];
    } else {
      continue;
    }
  }
  // return the sum
  return sum;
};

console.log(rangeSumBST([10, 5, 15, 3, 7, null, 18], 7, 15));
