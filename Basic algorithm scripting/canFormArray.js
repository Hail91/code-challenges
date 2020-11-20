const canFormArray = function (arr, pieces) {
  // Loop over the input array
  for (let i = 0; i < arr.length; i) {
    // Find subarrays in pieces array that begin with the first value in input array.
    let value = pieces.find((v) => v[0] === arr[i]);
    // If we do not find said value, simply return false as it is not possible to use all the pieces to form the passed in array.
    if (!value) {
      return false;
      // Else, if there was only one value in the subarray, increment and move on to next piece. (1 item can fit anywhere in array)
    } else if (value.length == 1) {
      i += 1;
      continue;
    } else {
      // Otherwise, get the length of value
      let len = value.length;
      // Make a copy of the array from our current position to the length of the 'piece' we're dealing with.
      let copy = arr.slice(i, i + len);
      // Compare the sliced copy from original array to the 'piece' array we're looking at.
      if (JSON.stringify(copy) === JSON.stringify(value)) {
        // If they match, skip ahead that many places.
        i += len;
        continue;
        // Otherwise return false
      } else return false;
    }
  }
  // If we make it all the way though, return true.
  return true;
};
// Log output
console.log(canFormArray([49, 18, 16], [[16, 18, 49]]));
