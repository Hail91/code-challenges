const uniqueMorseRepresentations = function (words) {
  let translationDict = {};
  // Copy over array of morse code translations
  let morseCode = [
    ".-",
    "-...",
    "-.-.",
    "-..",
    ".",
    "..-.",
    "--.",
    "....",
    "..",
    ".---",
    "-.-",
    ".-..",
    "--",
    "-.",
    "---",
    ".--.",
    "--.-",
    ".-.",
    "...",
    "-",
    "..-",
    "...-",
    ".--",
    "-..-",
    "-.--",
    "--..",
  ];
  // Build array of lowercase English letters
  let alphabet = [..."abcdefghijklmnopqrstuvwxyz"];
  // Populate an object with key/val pairs for O(1) Lookup and retrieval
  // We are taking O(n) time to run this operation, but it's worth it for the perfomance gain using a hashtable
  for (let i = 0; i < alphabet.length; i++) {
    translationDict[alphabet[i]] = morseCode[i];
  }
  // Loop over words Array translation each word to it's morse representation.
  for (let j = 0; j < words.length; j++) {
    words[j] = words[j].split("");
    // Loop over each string
    for (let s = 0; s < words[j].length; s++) {
      words[j][s] = translationDict[words[j][s]];
    }
  }
  let finalWords = words.map((el) => {
    return el.join("");
  });
  let result = new Set(finalWords);
  return result.size;
};

console.log(
  uniqueMorseRepresentations(["noilq", "kzlq", "ydreq", "ybxk", "kzlq"])
);
