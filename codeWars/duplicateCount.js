function duplicateCount(text) {
  let duplicates = 0;
  let charHash = {};
  // Loop over text inserting chars and frequencies into hashtable
  for (let i = 0; i < text.length; ++i) {
    let char = text[i].toLowerCase();
    if (char in charHash) {
      charHash[char] += 1;
      if (charHash[char] === 2) duplicates += 1;
    } else charHash[char] = 1;
  }
  return duplicates;
}
// Log output
console.log(duplicateCount("Indivisibilities"));
