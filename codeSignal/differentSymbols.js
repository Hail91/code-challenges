// Return unique chars from string, hashtable implementation makes the most sense here.
function differentSymbolsNaive(s) {
  const characterHash = {};
  // Iterate over string and store/check
  for (let i = 0; i < s.length; i++) {
    if (s[i] in characterHash) continue;
    else characterHash[s[i]] = 1;
  }
  return Object.keys(characterHash).length;
}
// Log output
console.log(differentSymbolsNaive("abaczzi"));
