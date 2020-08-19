function arrayReplace(inputArray, elemToReplace, substitutionElem) {
  return inputArray.map((e) => {
    if (e === elemToReplace) {
      return (e = substitutionElem);
    } else return e;
  });
}

console.log(arrayReplace([1, 2, 1]));
