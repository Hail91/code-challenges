function firstDuplicateValue(array) {
  let DuplicateHash = {};
  for (let i = 0; i < array.length; i++) {
    if (array[i] in DuplicateHash) {
      DuplicateHash[array[i]] += 1;
      if (DuplicateHash[array[i]] == 2) {
        return array[i];
      }
    } else DuplicateHash[array[i]] = 1;
  }
}
console.log(firstDuplicateValue([2, 1, 5, 2, 3, 3, 4]));
