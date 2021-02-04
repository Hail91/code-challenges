function variableName(name) {
  // Check if first value is an int
  if (Number.isInteger(Number(name[0]))) {
    return false;
  }
  // Otherwise, generate a regex expression to check for remaining conditions
  let checker = new RegExp("^[a-zA-Z0-9_]+$");
  return checker.test(name);
}
// Log output
console.log(variableName("2w2"));
