function isBeautifulString(inputString) {
  let freqHash = {};
  // Create Alphabet of lowercase chars
  let alphabet = [...Array(26)].map((val, i) =>
    String.fromCharCode(i + 65).toLowerCase()
  );
  // Loop over the alphabet array
  for (let i = 0; i < alphabet.length; ++i) {
    // If the passed in string includes the char we're looking at in the loop
    if (inputString.includes(alphabet[i])) {
      // Loop over the input string
      for (let j = 0; j < inputString.length; ++j) {
        // If the characters match between alphabet array and inputstring
        if (inputString[j] === alphabet[i]) {
          // Check if it's already been added
          if (alphabet[i] in freqHash) {
            // If so, increment occurrences
            freqHash[alphabet[i]] += 1;
            // Otherwise add it
          } else freqHash[alphabet[i]] = 1;
        }
      }
      // Else set it's occurrence to 0
    } else freqHash[alphabet[i]] = 0;
  }
  // Grab all occurrences of chars from hashtable
  let values = Object.values(freqHash);
  // Iterate over them
  for (let k = 0; k < values.length; ++k) {
    // If a value later in alphabet has more occurrences
    if (values[k + 1] > values[k]) {
      // break out by returning false, it's not beautiful
      return false;
    }
  }
  // If we make it all the way though, return true...it is beautiful.
  return true;
}
// Log output
console.log(isBeautifulString("bbbaacdafe"));
