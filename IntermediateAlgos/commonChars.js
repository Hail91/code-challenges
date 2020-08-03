// Return the number of common characters between two input strings.
function commonCharacterCount(s1, s2) {
  let commonCount = 0;
  s1 = s1.split("");
  s2 = s2.split("");
  // Loop over s1, check if it exists in s2.
  for (let i = 0; i < s1.length; i++) {
    // If it does, remove it off s2 and increment commonCount.
    if (s2.includes(s1[i])) {
      s2.splice(s2.indexOf(s1[i]), 1);
      commonCount += 1;
    } else {
      continue;
    }
  }
  return commonCount;
}

console.log(commonCharacterCount("aabcc", "adcaa"));
