const countConsistentStrings = function (allowed, words) {
  let output = 0;
  for (let word of words) {
    let found = true;
    for (let letter of word) {
      // If the string does not include letter in word
      if (!allowed.includes(letter)) found = false;
    }
    // If we find all the letters in allowed, then increment output
    if (found) output += 1;
  }
  return output;
};
// Log output
console.log(countConsistentStrings("ab", ["ad", "bd", "aaab", "baa", "badab"]));
