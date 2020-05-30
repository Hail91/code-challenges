// Double all characters in a string and return

function doubleChar(str) {
  // Initialize an empty string variable to return
  let newStr = "";
  // Need to loop over string characters
  for (let i = 0; i < str.length; i++) {
    newStr += [str[i] + str[i]];
  }
  return newStr;
}

console.log(doubleChar("hello"));
