function isBeautifulString(inputString) {
  let freqHash = {};
  let alphabet = [...Array(26)].map((val, i) =>
    String.fromCharCode(i + 65).toLowerCase()
  );
  for (let i = 0; i < alphabet.length; ++i) {
    if (inputString.includes(alphabet[i])) {
      for (let j = 0; j < inputString.length; ++j) {
        if (inputString[j] === alphabet[i]) {
          if (alphabet[i] in freqHash) {
            freqHash[alphabet[i]] += 1;
          } else freqHash[alphabet[i]] = 1;
        }
      }
    } else freqHash[alphabet[i]] = 0;
  }
  let values = Object.values(freqHash);
  for (let k = 0; k < values.length; ++k) {
    if (values[k + 1] > values[k]) {
      return false;
    }
  }
  return true;
}
// Log output
console.log(isBeautifulString("bbbaacdafe"));
