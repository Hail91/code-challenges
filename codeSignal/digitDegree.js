function digitDegree(n, count = 0) {
  if (n < 10) return count;
  n = n
    .toString()
    .split("")
    .reduce((a, b) => Number(a) + Number(b));
  count += 1;
  if (n >= 10) {
    return digitDegree(n, count);
  }
  return count;
}
// Log output
console.log(digitDegree(73));
