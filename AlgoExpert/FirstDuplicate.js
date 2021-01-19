function firstDuplicateValueHash(array) {
  // Instantiate hashtable
  let DuplicateHash = {};
  // Loop over array in O(n) fashion
  for (let i = 0; i < array.length; i++) {
    // If hashtable contains the value
    if (array[i] in DuplicateHash) {
      // increment the number of occurences
      DuplicateHash[array[i]] += 1;
      // If that value has occurred a second time
      if (DuplicateHash[array[i]] == 2) {
        // Simply return that value
        return array[i];
      }
      // Otherwise set occurrences to 1 since it's the first time we've found it, then keep looping
    } else DuplicateHash[array[i]] = 1;
  }
  // Return -1 if no duplicates found
  return -1;
}
console.log(firstDuplicateValueHash([2, 1, 5, 2, 3, 3, 4]));

// Alternative solution using O(1) space
function firstDuplicateValue(array) {
  for (const value of array) {
    const absoluteValue = Math.abs(value);
    if (array[absoluteValue - 1] < 0) return absoluteValue;
    array[absoluteValue - 1] *= -1;
  }
  return -1;
}
console.log(firstDuplicateValue([2, 1, 5, 2, 3, 3, 4]));
