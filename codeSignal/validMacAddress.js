// I hate Regex
function isMAC48Address(inputString) {
  // First check that the string 'starts with' - Following ^ with length of 2
  // Then check for the same expression except with a preceding hyphen (same length of 2)
  // Then check it ends with 5 matches between hyphens, indexed from 0 (I think?)
  let checker = /^[a-fA-F0-9]{2}(-[a-fA-F0-9]{2}){5}$/;
  return checker.test(inputString);
}
// Log output
console.log(isMAC48Address("00-1B-63-84-45-E6"));
