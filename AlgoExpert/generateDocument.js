// Time Complexity: O(n + m) where n is the number of characters and m is the length of document
// Space Complexity: O(n) where 'n' is number of characters in characters string
function generateDocument(characters, document) {
  let freqHash = {};
  // Fill a hashtable with frequencies from characters string
  for (let i = 0; i < characters.length; ++i) {
    // If character is already in hashTable, increment freq
    if (characters[i] in freqHash) freqHash[characters[i]] += 1;
    // Otherwise, add it
    else freqHash[characters[i]] = 1;
  }
  // Loop the document string and reduce from hashTable freqs
  for (let j = 0; j < document.length; ++j) {
    // If we go below zero, we don't have enough chars, return false
    if (document[j] in freqHash) {
      freqHash[document[j]] -= 1;
      if (freqHash[document[j]] < 0) return false;
    } else return false;
  }
  // If we make it through entire loop, return true
  return true;
}
// Log output
console.log(
  generateDocument("Bste!hetsi ogEAxpelrt x", "AlgoExpert is the Best!")
);
