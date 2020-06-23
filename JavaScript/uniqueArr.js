// Return true if all values in input array are unique, otherwise return false.
function testJackpot(result) {
  // Create a new set of unique values from result array
  const uniques = new Set(result);
  console.log(uniques);
  // If set's size is greater than 0 return false
  if (uniques.size === 1) {
    return true;
  } else {
    // else return true
    return false;
  }
}

console.log(testJackpot(["SS", "SS", "SS", "SS"]));
