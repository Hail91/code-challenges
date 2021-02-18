function getIndexToIns(arr, num) {
  let valIndex = 0;
  // sort input array
  arr = arr.sort((a, b) => a - b);
  // If array is empty, insert at 0th (first index)
  if (arr.length === 0) return valIndex;
  else if (num >= arr[arr.length - 1]) {
    // Insert in last position (current index of largest + 1)
    valIndex = arr.length;
    return valIndex;
  }
  // Loop over sorted input array
  for (let i = 0; i < arr.length; i++) {
    if (num > arr[i] && num < arr[i + 1]) {
      valIndex = arr.indexOf(arr[i]) + 1;
      return valIndex;
    } else if (num <= arr[i] && num < arr[i + 1]) {
      valIndex = arr.indexOf(arr[i]);
      return valIndex;
    } else continue;
  }
}
// Log output
console.log(getIndexToIns([2, 5, 10], 10));
