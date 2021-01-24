function centuryFromYear(year) {
  // Divide year by 100 returning the value rounded up to nearest non-float
  return Math.ceil(year / 100);
}
// Log output
console.log(centuryFromYear(1905));
