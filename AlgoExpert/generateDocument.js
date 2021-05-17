// Space Complexity: O(n + m) where n is the number of characters and m is the length of document
// Time Complexity: O(n) where 'n' is number of characters in characters string
function generateDocument(characters, document) {
  let freqHash = {};
  // Fill a hashtable with frequencies from characters string
  for (char of characters) {
    // If character is already in hashTable, increment freq
    if (char in freqHash) freqHash[char] += 1;
    // Otherwise, add it
    else freqHash[char] = 1;
  }
  // Loop the document string and reduce from hashTable freqs
  for (c of document) {
    // If we go below zero, we don't have enough chars, return false
    if (c in freqHash) {
      freqHash[c] -= 1;
      if (freqHash[c] < 0) return false;
    } else return false;
  }
  // If we make it through entire loop, return true
  return true;
}
// Log output
console.log(
  generateDocument("Bste!hetsi ogEAxpelrt x", "AlgoExpert is the Best!")
);
