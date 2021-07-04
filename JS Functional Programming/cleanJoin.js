function sentensify(str) {
  // Split string on Whitespace <-- Not sure if the W is whitespace or not, can't remember...will check.
  str = str.split(/\W/);
  // Join string on empty spaces
  let newStr = str.join(" ");
  // Return the string
  return newStr;
}
// Log output
console.log(sentensify("May-the-force-be-with-you"));
