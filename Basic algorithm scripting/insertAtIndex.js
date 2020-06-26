function getIndexToIns(arr, num) {
  let valIndex;
  // sort input array
  arr = arr.sort((a, b) => a - b);
  if (arr.length === 0) {
    valIndex = 0;
    return valIndex;
  } else if (num > Math.max(...arr)) {
    valIndex = arr.indexOf(Math.max(...arr)) + 1;
    return valIndex;
  }
  // Loop over sorted input array
  for (let i = 0; i < arr.length; i++) {
    // if Array is empty, insert at index 0
    // compare num to each value of array checking whether it fits in
    if (num > arr[i] && num < arr[i + 1]) {
      valIndex = arr.indexOf(arr[i]) + 1;
      return valIndex;
    } else if (num === arr[i] && num < arr[i + 1]) {
      valIndex = arr.indexOf(arr[i]);
      return valIndex;
    }
    // If not, continue iterating through until you find a place for it.
    else {
      continue;
    }
  }
}

getIndexToIns([2, 5, 10], 15);
