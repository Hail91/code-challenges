function runLengthEncoding(string) {
  let charHash = {};
  let encodedStr = "";
  for (let i = 0; i < string.length; i) {
    if (string[i + 1] !== string[i]) {
      charHash[i] = [string[i]];
      i += 1;
    } else if (string[i + 1] == string[i]) {
      let count = i;
      charHash[i] = [string[i]];
      while (string[count + 1] == string[i]) {
        charHash[i].push(string[i]);
        count += 1;
      }
      i += charHash[i].length;
    }
  }
  let charCounts = Object.values(charHash);
  charCounts.map((char) => {
    if (char.length >= 10) {
      let len = char.length;
      let subtractBy = 9;
      while (len !== 0) {
        if (len < 10) {
          subtractBy = len;
          len -= len;
        } else len = len - subtractBy;
        encodedStr += `${subtractBy}${char[0]}`;
      }
    } else encodedStr += `${char.length}${char[0]}`;
  });
  return encodedStr;
}

console.log(runLengthEncoding("aAaAaaaaaAaaaAAAABbbbBBBB"));
