function killKthBit(n, k) {
  n = n.toString(2);
  // If kth value from right is not a zero, change it back to zero and return base 2 representation
  if (Number(n[n.length - k]) !== 0) {
    n = n.replace(/./g, (c, i) => (i == n.length - k ? "0" : c));
    return parseInt(n, 2);
  }
  // Else return base 2 representation of n
  else {
    return parseInt(n, 2);
  }
}

console.log(killKthBit(37, 4));
