function highestDigit(number) {
  // Convert number to string
  number = number.toString();
  // Split string into an array
  number.split("");
  // Return Max
  return Math.max(...number);
}

console.log(highestDigit(347));
