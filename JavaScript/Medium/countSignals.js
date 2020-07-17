function countSignals(frequencies, filterRanges) {
  // Need to determine common pass through range for given filterRanges.
  let passThrough = [];
  // Check first value of each subArray
  for (let i = 0; i < filterRanges.length; i++) {
    // Look at first value of of each SubArray and set accordingly
    let firstVal = filterRanges[i][0];
    // Look at second value of each SubArray and set accordingly
    let secondVal = filterRanges[i][1];
    // If passThrough is empty OR the first value is greater than current..
    if (passThrough.length === 0 || firstVal > passThrough[0]) {
      // Replace
      passThrough[0] = firstVal;
    }
    // Repeat above logic for second value, this should give us a range that all other ranges conform to.
    if (passThrough.length === 1 || secondVal < passThrough[1]) {
      passThrough[1] = secondVal;
    }
  }
  // Filter through frequencies based on which ones conform to set range in passThrough Array.
  frequencies = frequencies.filter(
    (el) => el >= passThrough[0] && el <= passThrough[1]
  );
  return frequencies.length;
}
