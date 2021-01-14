const string = "Hello".replace(/\s+/g, "");
// Split into an array of chars
const stringArray = string.split("");
// Use reduce to populate a hashtable with count of each character
const characterMap = stringArray.reduce((map, character) => {
  map[character] ? (map[character] += 1) : (map[character] = 1);
  return map;
}, {});
// Get the keys from the hashtable, and filter them only looking for the character that appears to most number of times
const results = Object.keys(characterMap).filter(
  (character) =>
    characterMap[character] ===
    Math.max.apply(null, Object.values(characterMap))
);
// Log output
console.log(results);
