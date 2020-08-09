function largestNumber(n) {
  // Largest number to 'n' in base 10 numbering system will always start with '9'.
  return Number("9".repeat(n));
}

console.log(largestNumber(6));
