function commonCharacterCount(s1, s2) {
  let commonCount = 0;
  let charHash = {};

  for (let i = 0; i < s1.length; i++) {
    if (s1[i] in charHash) {
      charHash[s1[i]] += 1;
    } else charHash[s1[i]] = 1;
  }

  for (let j = 0; j < s2.length; j++) {
    if (s2[j] in charHash && charHash[s2[j]] > 0) {
      charHash[s2[j]] -= 1;
      commonCount += 1;
    } else continue;
  }
  return commonCount;
}
// Log output
console.log(commonCharacterCount("aabcc", "adcaa"));
