// Space Complexity --> Auxillary space I believe is O(1) since we shouldn't be using more space even if the input size increases.
// Also, the space taken up by the input size should be O(n), given that...I'd expect total space complexity being O(n).

// Time Complexity: I believe the time complexity for this is O(n) as the runtime should be directly proportional to the input size.
// (Either frequencies or filterRanges)

// Input size mem usage + Auxillary

function countSignals(frequencies, filterRanges) {
  // Need to determine common pass through range for given filterRanges.
  let passThrough = []; // O(1)
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
    // Repeat above logic for second value, this should give us a rangethat all other ranges conform to.
    if (passThrough.length === 1 || secondVal < passThrough[1]) {
      passThrough[1] = secondVal;
    }
  }
  // Filter through frequencies based on which ones conform to set range inpassThrough Array.
  frequencies = frequencies.filter(
    (el) => el >= passThrough[0] && el <= passThrough[1]
  );
  return frequencies.length;
}

console.log(
  countSignals(
    [8, 15, 14, 16, 21],
    [
      [10, 17],
      [13, 15],
      [13, 17],
    ]
  )
);
