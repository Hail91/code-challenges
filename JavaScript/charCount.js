// Return number of times a specified character appears in a string

function charCount(myChar, str) {
  count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === myChar) {
      count++;
    }
  }
  return count;
}

console.log(charCount("a", "aaron"));
