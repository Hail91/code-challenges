// Take an integer n and return all the digits squared (Must return an integer as well)
function squareDigits(n) {
  // Switch integer to a string
  // Call split on the string
  n = n.toString().split("");
  // Loop over newly created array
  for (let i = 0; i < n.length; i++) {
    // Convert back to number while squaring
    n[i] = Number(n[i]);
    n[i] = Math.pow(n[i], 2);
  }
  return Number(n.join(""));
}

console.log(squareDigits(1234));
