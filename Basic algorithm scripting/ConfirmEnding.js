function confirmEnding(str, target) {
  // get length of target string
  let targetLen = target.length;
  // Get last targetLen chars of 'str'
  let slicedStr = str.slice(-targetLen);
  // If sliced string is equivalent to target string
  if (slicedStr === target) {
    // Return true
    return true;
    // else return false
  } else return false;
}
// Another way to write same solution
function confirmEndingShort(str, target) {
  // Can use endsWith built in String.prototype function to check
  if (str.endsWith(target) == true) {
    return true;
  } else return false;
}
// Log output
console.log(confirmEnding("Bastian", "n"));
