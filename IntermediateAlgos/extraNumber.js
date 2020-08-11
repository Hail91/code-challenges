// Naive bloated implementation.
function extraNumber(a, b, c) {
  let numArray = [a, b, c];
  let copyDict = {};

  for (let i = 0; i < numArray.length; i++) {
    if (numArray[i] in copyDict) {
      copyDict[numArray[i]] += 1;
    } else {
      copyDict[numArray[i]] = 1;
    }
  }
  // Loop over Dict and return item with value 1
  for (let [key, value] of Object.entries(copyDict)) {
    if (value === 1) {
      return Number(key);
    }
  }
}

// Solution using Bitwise Operators.
// function extraNumber(a, b, c) {
//   return a ^ b ^ c;
// }

console.log(extraNumber(2, 7, 2));
