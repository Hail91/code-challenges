function firstNotRepeatingCharacter(s) {
  let charDict = {};
  let indexArr = [];
  // Loop over string and add chars and occurrences to the object.
  for (let i = 0; i < s.length; i++) {
    if (s[i] in charDict) {
      charDict[s[i]] += 1;
    } else {
      charDict[s[i]] = 1;
    }
  }
  // Loop over Dict getting keys with value of 1
  for (let [key, value] of Object.entries(charDict)) {
    if (charDict[key] === 1) {
      indexArr.push(s.indexOf(key));
    } else {
      continue;
    }
  }

  return indexArr.length > 0 ? s[Math.min(...indexArr)] : "_";
}
