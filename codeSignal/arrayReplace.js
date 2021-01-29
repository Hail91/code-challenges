function arrayReplace(inputArray, elemToReplace, substitutionElem) {
  return inputArray.map((num, index, array) => {
    if (array[index] === elemToReplace) {
      return substitutionElem;
    } else return array[index];
  });
}
// Log output
console.log(arrayReplace([1, 2, 1], 1, 3))
