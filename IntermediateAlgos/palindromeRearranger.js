// Write a function to determine if it's possible to rearrange inputString into a palindrome.
function palindromeRearranging(inputString) {
  // Create a hashmap to hold number of occurrences of characters
  let charDict = {};
  // Loop over inputString populating hashmap as necessary
  for (let c = 0; c < inputString.length; c++) {
    if (inputString[c] in charDict) {
      charDict[inputString[c]] += 1;
    } else {
      charDict[inputString[c]] = 1;
    }
  }
  let vals = Object.values(charDict);
  if (vals.length === 1) {
    return true;
  }
  let odds = vals.filter((el) => el % 2 !== 0);
  if (odds.length > 1) {
    return false;
  } else {
    return true;
  }
}

console.log(palindromeRearranging("aabb"));
