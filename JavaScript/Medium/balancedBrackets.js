function balancedBrackets(string) {
  let chars = ["[", "]", "{", "}", "(", ")", "|"];
  let newStr = "";
  let results = [];
  // Create a dictionary/object that we'll use to check against
  let bracketsDict = {
    "[": "]",
    "(": ")",
    "{": "}",
    "|": "|",
  };

  for (let x = 0; x < string.length; x++) {
    if (
      string[x] === "[" ||
      string[x] === "]" ||
      string[x] === "{" ||
      string[x] === "}" ||
      string[x] === "(" ||
      string[x] === ")" ||
      string[x] === "|"
    ) {
      newStr += string[x];
    }
  }
  // Loop over string
  for (let i = 0; i <= string.length; i++) {
    // If we come across any opening brackets in our string, add them to results
    if (
      newStr[i] === "[" ||
      newStr[i] === "(" ||
      newStr[i] === "{" ||
      (newStr[i] === "|" && newStr[i + 1] === "|")
    ) {
      results.push(newStr[i]);
    } else {
      // Otherwise, if we encounter a closing bracket, remove the last opening bracket from array and store in variable
      let recentOpenBr = results.pop();
      if (newStr[i] !== bracketsDict[recentOpenBr]) {
        return false;
      }
    }
  }
  return true;
}
balancedBrackets(
  "I (wa)n{t to buy a on}esie[…] b(u{[t] kno}w it) won’t suit me."
);
