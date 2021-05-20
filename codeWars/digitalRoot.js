function digital_root(n) {
  // Split number into a string
  n = n.toString().split("");
  // Sum the values
  n = n.reduce((a, b) => Number(a) + Number(b));
  if (n.toString().length > 1) {
    return digital_root(n);
  }
  return Number(n);
}
// Log output
console.log(digital_root(493193));
