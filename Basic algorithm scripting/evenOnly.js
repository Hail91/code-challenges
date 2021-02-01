function evenDigitsOnly(n) {
  n = n
    // Convert to string
    .toString()
    // Split into array
    .split("")
    // Map over array, if value is even return true, else return false.
    .map((el) => (el % 2 === 0 ? true : false));
  // Check if every result is even, if so return true, otherwise return false
  return n.every((el) => el === true);
}

console.log(evenDigitsOnly(1364564));
