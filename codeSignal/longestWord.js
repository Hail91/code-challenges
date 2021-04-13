function longestWord(text) {
  text = text
    .replace(/[^a-zA-Z ]/g, " ")
    .split(" ")
    .filter((el) => el !== "");
  let currMaxIndex = 0;
  for (let i = 0; i < text.length; ++i) {
    if (text[i].length > text[currMaxIndex].length) {
      currMaxIndex = i;
    } else continue;
  }
  return text[currMaxIndex];
}
// Log output
console.log(longestWord("Hello, friend, at, work"));
