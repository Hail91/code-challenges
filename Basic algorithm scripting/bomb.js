function bomb(str) {
  // Replace any characters in the string that are not lower/upper case english letters with empty spaces.
  str = str.replace(/[^a-zA-Z\s]/g, "").toLowerCase();
  // Split string on empty space
  let strArray = str.split(" ");
  // If the array includes the word bomb, return 'Duck!!!', else return 'There is no bomb, relax.'
  return strArray.includes("bomb") ? "Duck!!!" : "There is no bomb, relax.";
}
// Log output
console.log(bomb("There is a bomb."));
