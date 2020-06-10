// Return number of integers missing between smallest and largest element in nums Array.

function makeArrayConsecutive(nums) {
  // Should probably have a variable to track how many missing numbers there are
  let total = 0;
  // Loop over nums Array from smallest value + 1 to largest value (inclusive)
  for (let i = Math.min(...nums) + 1; i <= Math.max(...nums); i++) {
    // If array contains the value i, move on
    if (nums.includes(i)) {
      continue;
    }
    // Otherwise, if not...increment total
    else {
      total += 1;
    }
  }
  return total;
}

console.log(makeArrayConsecutive([6, 2, 3, 8]));
