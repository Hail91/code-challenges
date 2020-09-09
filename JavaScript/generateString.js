var generateTheString = function (n) {
  // Generate an array of valid chars
  charArr = [...Array(26)].map((_, i) => String.fromCharCode(i + 97));
  // instantiate a string to return
  let str = "";
  // Loop over charArray starting at 'a' and append 1 to return string
  for (let i = 0; i < charArr.length; i++) {
    if (n % 2 !== 0) {
      while (n > 0) {
        str += charArr[i];
        n -= 1;
      }
      break;
    } else {
      str += charArr[i];
      n -= 1;
    }
  }
  return str;
};

console.log(generateTheString(7));
