function longestDigitsPrefix(inputString) {
  for (let i = 0; i <= inputString.length; i++) {
    if (Number.isInteger(Number(inputString[i])) && inputString[i] !== " ")
      continue;
    else return inputString.slice(0, i);
  }
}
// Log output
console.log(longestDigitsPrefix("123aa1"));
