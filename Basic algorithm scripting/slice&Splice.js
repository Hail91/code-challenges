function frankenSplice(arr1, arr2, n) {
  // Create copy of array2
  let newArr = arr2.slice(0);
  // Iterate over array1
  for (let i = 0; i < arr1.length; i++) {
    // Insert i'th element from array1 to newArr starting at index 1
    newArr.splice(n, 0, arr1[i]);
    // Increment n
    n++;
  }
  return newArr;
}
// Log output
console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));
