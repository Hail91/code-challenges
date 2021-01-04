// For each array element, multiply the remaining elements and return in an output array of the same length
// Complexities
// ------------
// Time: O(n)
// Space: O(n)
function arrayOfProducts(array) {
  let count = 0;
  let output = [];
  while (count <= array.length - 1) {
    output.push(array.slice(1).reduce((a, b) => a * b));
    array.push(...array.splice(0, 1));
    count += 1;
  }
  return output;
}

console.log(arrayOfProducts([5, 1, 4, 2]));
