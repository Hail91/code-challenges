// For each array element, multiply the remaining elements and return in an output array of the same length
// Complexities
// ------------
// Time: O(n^2)?
// Push: O(1)
// Slice: O(n)
// Reduce: O(n) best case
// Splice: O(n)
// -------------------------
// Space: O(n)
function arrayOfProducts(array) {
  // Track count, will let us know when to break out of the while loop
  let count = 0;
  // Push result of multiplying all other values to this array, wondering if we could do this in place?
  let output = [];
  // Initiate the loop
  while (count <= array.length - 1) {
    // Slice the array starting at the second value, reduce all those values down into a single product and push to output
    output.push(array.slice(1).reduce((a, b) => a * b));
    // Remove the first value and push it onto the end of the array, essentially just 'shifting' values down.
    array.push(...array.splice(0, 1));
    // Increment count
    count += 1;
  }
  // Return output
  return output;
}

console.log(arrayOfProducts([5, 1, 4, 2, 2]));
