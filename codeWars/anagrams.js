function anagrams(word, words) {
  word = word.split("").sort().join("");
  // Filter words
  words = words.filter((w) => w.split("").sort().join("") === word);
  return words;
}
// Log output
console.log(anagrams("abba", ["bbaa", "aabb", "abca"]));
