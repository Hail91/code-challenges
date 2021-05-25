function pigIt(str) {
  // Split into array of words
  str = str.split(" ");
  for (let i = 0; i < str.length; i++) {
    // Check for valid letter before we proceed
    if (RegExp(/[a-zA-Z]/, "u").test(str[i])) {
      // Split word into individual letters
      str[i] = str[i].split("");
      // Remove first letter and push onto end
      str[i].push(...str[i].splice(0, 1));
      // Append 'ay'
      str[i][str[i].length - 1] += "ay";
      // Rejoin into new word
      str[i] = str[i].join("");
    }
  }
  // Return new string
  return str.join(" ");
}
// Log output
console.log(pigIt("Hello world !"));
