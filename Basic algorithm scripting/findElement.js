// Return the first element in the input arr that satisfies input func, otherwise, if no elements meet condition, return undefined.
function findElement(arr, func) {
  let num = 0;
  // Loop over entire array
  for (let i = 0; i < arr.length; i++) {
    // Set num to the current value --> arr[i]
    num = arr[i];
    // If the value is even (passed into func)
    if (func(num)) {
      // Return it
      return num;
    }
  }
  // If none of the array values are even, return undefined
  return undefined;
}
// Log output (func is to find event elements in an array)
findElement([1, 2, 3, 4], (num) => num % 2 === 0);
