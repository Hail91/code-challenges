var freqAlphabets = function (s) {
  let tempStr = "";
  let returnStr = "";
  // Instantiate an alphabet Array (length 26, a-z lowercase)
  let alpha = [...Array(26)].map((_, i) => String.fromCharCode(i + 97));
  // Loop over the string
  for (let i = 0; i < s.length; i) {
    if (s[i + 2] === "#") {
      tempStr = tempStr.concat(s[i], s[i + 1]); // tempStr == '10'
      returnStr += alpha[Number(tempStr) - 1];
      tempStr = "";
      i += 3;
    } else {
      tempStr += s[i];
      returnStr += alpha[Number(tempStr) - 1];
      tempStr = "";
      i += 1;
    }
  }
  return returnStr;
};

console.log(freqAlphabets("1326#"));
