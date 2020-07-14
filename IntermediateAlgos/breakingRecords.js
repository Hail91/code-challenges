function breakingRecords(scores) {
  // We should set variables to track current low/high scores first.
  // Both will be initialized to the first score (game 1)
  let currLow = scores[0];
  let currHigh = scores[0];
  // The we also establish an array to track number of times she break both records.
  let recordsArr = [0, 0];
  // Loop over scores Array checking value against currLow and currHigh incrementing
  for (let s = 1; s < scores.length; s++) {
    // If next game's score is less than current low, increment recordsArr[1]
    if (scores[s] < currLow) {
      recordsArr[1] += 1;
      currLow = scores[s];
    } else if (scores[s] > currHigh) {
      recordsArr[0] += 1;
      currHigh = scores[s];
    } else {
      continue;
    }
  }
  // Return records Arr
  return recordsArr;
}

console.log(breakingRecords([3, 4, 21, 36, 10, 28, 35, 5, 24, 42]));
