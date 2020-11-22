function chunkArrayInGroups(arr, size) {
  // Temporary array variable here.
  let tempArr = [];
  // While array length is equal to or greater than size....
  while (arr.length >= size) {
    // Splice off 'size' number of elements from front of input array
    let removed = arr.splice(0, size);
    // Push those elements to our output array
    tempArr.push(removed);
  }
  // If array length is less than size input
  if (arr.length > 0) {
    // Simply push the entire array to output array
    tempArr.push(arr);
  }
  // Return output array
  return tempArr;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
