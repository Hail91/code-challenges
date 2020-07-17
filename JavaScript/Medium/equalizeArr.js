function equalizeArray(arr) {
  // Write your code here
  // Could create a dictionary to track number of occurences in array
  let occurrences = {};
  // Eventually number of occurrences will be stored here.
  let maxVals = [];
  // Number of minimum removals, we'll return this.
  let numRemovals = 0;
  // Loop over array storing arr value and how many occurrences.
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] in occurrences) {
      occurrences[arr[i]] = occurrences[arr[i]] + 1;
    } else {
      occurrences[arr[i]] = 1;
    }
  }
  // Loop over Object and extract the value that occurs the most number of times.
  for (let [key, value] of Object.entries(occurrences)) {
    maxVals.push(value);
  }
  // Get maximum number of occurrences.
  let maxOccurs = Math.max(...maxVals);
  // Loop over MaxVal array and check for values that occurr less than the most frequently occuring value...
  for (let m = 0; m < maxVals.length; m++) {
    if (maxVals[m] !== maxOccurs) {
      // If we find one, track it by incrementing numRemovals.
      numRemovals += maxVals[m];
    }
  }
  // Return number of removals.
  return numRemovals;
}
