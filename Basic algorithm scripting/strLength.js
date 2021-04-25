function sortByLength(arr) {
  // Return the array of strings sorted in increasing length order
  return arr.sort((a, b) => a.length - b.length);
}
// Log output
console.log(sortByLength(["a", "ddd", "bb", "cccc"]));
