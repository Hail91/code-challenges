function isPangram(string) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  // Instantiate hashmap
  let hashMap = {};
  // Populate hashMap with chars
  for (let i = 0; i < alphabet.length; ++i) {
    hashMap[alphabet[i]] = 0;
  }
  // Iterate over the string
  for (let j = 0; j < string.length; ++j) {
    let char = string[j].toLowerCase();
    if (char in hashMap) hashMap[char] += 1;
    else continue;
  }
  return Object.values(hashMap).every((el) => el >= 1);
}
// Log output
console.log(isPangram("This is not a pangram."));
