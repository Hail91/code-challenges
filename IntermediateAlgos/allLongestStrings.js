function allLongestStrings(inputArray) {
  // Set variable for maxArrLen
  let initialLen = inputArray[0].length;
  // Loop over inputArray
  for (let s = 1; s <= inputArray.length - 1; s++) {
    // Check length of each string in InputArray, if we find one with a length longer than current maxArrLen
    if (inputArray[s].length > initialLen) {
      // Then overwrite maxArrLen with the new length.
      initialLen = inputArray[s].length;
    } else {
      // and continue until we've checked everything.
      continue;
    }
  }
  // Then filter inputArray for strings of maxArrLen and return.
  return inputArray.filter((element) => element.length === initialLen);
}

console.log(allLongestStrings(["enyky", "benyky", "yely", "varennyky"]));
