const stringData = (string) => {
  // Generate object to populate
  let dataObj = {
    words: 0,
    characters: 0,
    spaces: 0,
  };
  // Check for string type before we begin
  if (typeof string !== "string") return dataObj;
  // Core logic
  let spaces = 0;
  let wordsAndChars = string.split(" ").filter((result) => {
    if (result === "") spaces += 1;
    return result !== "";
  });
  // Could probably abstract the below away
  dataObj.words = wordsAndChars.length;
  dataObj.characters = string.length;
  dataObj.spaces = spaces + wordsAndChars.length - 1;
  // Return the object
  return dataObj;
};
// Log output
console.log(stringData("yup  Hello World  test _123 23"));
