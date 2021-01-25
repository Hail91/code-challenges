function allLongestStrings(inputArray) {
  let strLens = inputArray.map((string) => {
    return string.length;
  });
  // Filter inputArray by Max strLen
  return inputArray.filter((str) => {
    return str.length === Math.max(...strLens);
  });
}
// Log output
console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));
