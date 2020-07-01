function fearNotLetter(str) {
  // Pointer for position in String
  let strCounter = 0;
  let alphabet = [...Array(26).keys()].map((i) => String.fromCharCode(i + 97));
  // Get index of first string char in alphabet array
  let beginIndex = alphabet.indexOf(str[0]);
  // Use that index to decide where to start for loop.
  // Loop over alphabet array comparing values to string chars
  for (let i = beginIndex; i < alphabet.length; i++) {
    // When something isn't a match, return value at that index from alphabet array
    if (alphabet[i] !== str[strCounter]) {
      return alphabet[i];
    } else {
      // Increment string pointer and continue looping
      strCounter += 1;
      continue;
    }
  }
  // otherwise, continue until loop concludes and return undefined
  return undefined;
}

fearNotLetter("stvwx");
