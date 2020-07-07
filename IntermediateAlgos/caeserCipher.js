function rot13(str) {
  // Probably going to need an array of alphabet chars to compare string chars to
  let alphaArray = [...Array(26)].map((_, i) =>
    String.fromCharCode("A".charCodeAt(0) + i)
  );
  // New string to return out instead of modifying string in place.
  let newStr = "";
  // Will need to loop over the string comparing the char to alphabet char
  for (let i = 0; i < str.length; i++) {
    // If we encounter whitespace, append to newStr.
    if (str[i] === " ") {
      newStr += " ";
    }
    // If input string contains a special symbol not in alphabet array, then just append that character to newStr.
    else if (!alphaArray.includes(str[i])) {
      newStr += str[i];
    } else {
      // If index of str[i] in alphaArray is < 13
      if (alphaArray.indexOf(str[i]) < 13) {
        // Replace str[i] with the value 13 places to the right of str[i] in alphaArray.
        newStr += alphaArray[alphaArray.indexOf(str[i]) + 13];
      }
      // Else if the index of str[i] in AlphaArray is >= 13
      else if (alphaArray.indexOf(str[i]) >= 13) {
        // Replace str[i] with the value 13 places to the left of str[i] in alphaArray.
        newStr += alphaArray[alphaArray.indexOf(str[i]) - 13];
      }
    }
  }
  return newStr;
}

rot13("SERR PBQR PNZC");
