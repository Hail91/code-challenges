// Return only the longest strings from the array
function allLongestStrings(inputArray) {
  // Map over the input array and return the lengths of every string in the array
  let strLens = inputArray.map((string) => {
    return string.length;
  });
  // Return values from the input array where the string length matches the maximum found length
  return inputArray.filter((str) => {
    return str.length === Math.max(...strLens);
  });
}
// Log output
console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));
