function mutation(arr) {
  // Store array strings in variables
  let stringOne = arr[0].toLowerCase();
  let stringTwo = arr[1].toLowerCase();
  // Initialize a hashmap
  let charDict = {};
  // Loop over charDict adding char values from first string
  for (let i = 0; i < stringOne.length; i++) {
    charDict[stringOne[i]] = 1;
  }
  // Loop over second string checking it's char values against the hashmap
  for (let s = 0; s < stringTwo.length; s++) {
    if (stringTwo[s] in charDict) {
      continue;
    } else {
      return false;
    }
  }
  return true;
}
mutation(["hello", "hey"]);
