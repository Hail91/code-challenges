// Rotate elements in arr left 'd' times.
function leftRotate(arr, d) {
  // Loop over array twice
  for (let i = 0; i < d; i++) {
    // Remove element from front of array on each iteration and store in a variable
    let removedEl = arr.shift(arr[i]);
    // push that value back onto the end of the array which will automatically push values 'down' the array
    arr.push(removedEl);
  }
  return arr;
}

console.log(leftRotate([1, 2, 3, 4, 5], 2));
