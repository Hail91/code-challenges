function chunkArrayInGroups(arr, size) {
  // Temporary array variable here.
  let tempArr = [];
  // While array length is equal to or greater than size....
  while (arr.length >= size) {
    // Splice off 'size' elements from front
    let removed = arr.splice(0, size);
    tempArr.push(removed);
  }
  if (arr.length > 0) {
    tempArr.push(arr);
  }
  return tempArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
