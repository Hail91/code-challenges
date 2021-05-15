// Runs in about 5.8ms, issue currently is running multiple loops with pre-built methods inside for loop
function firstNonRepeatingCharacter(string) {
  let checked = [];
  // Loop over string
  for (let idx = 0; idx < string.length; ++idx) {
    // copy string from i + 1 to end
    let copy = string.slice(idx + 1, string.length);
    // check that string for string[i]
    if (copy.includes(string[idx]) || checked.includes(string[idx])) {
      checked.push(string[idx]);
      continue;
    }
    // If it's not found, return idx
    else return idx;
  }
  // Otherwise return -1
  return -1;
}
// Log output
console.log(firstNonRepeatingCharacter("faadabcbbebdf"));
