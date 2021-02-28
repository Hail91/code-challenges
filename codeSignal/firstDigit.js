function firstDigit(inputString) {
  for (let i = 0; i < inputString.length; i++) {
    if (Number.isInteger(Number(inputString[i])) && inputString[i] !== " ")
      return inputString[i];
  }
}
// Log output
console.log(firstDigit("apples1_231j"));
