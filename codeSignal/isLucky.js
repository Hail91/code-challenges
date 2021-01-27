function isLucky(n) {
  let firstHalf = 0;
  let secondHalf = 0;
  // Convert to string
  n = n.toString();
  // Loop over the string
  for (let i = 0; i < n.length; i++) {
    if (i < n.length / 2) {
      firstHalf += Number(n[i]);
    } else secondHalf += Number(n[i]);
  }
  return firstHalf == secondHalf;
}
// Log
console.log(isLucky("1230"));
