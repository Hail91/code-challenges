function moveElementToEnd(array, toMove) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] == toMove) {
      array.unshift(...array.splice(i, 1));
    }
  }
  return array.reverse();
}
console.log(moveElementToEnd([2, 1, 2, 2, 2, 3, 4, 2], 2));

// Another more concise way to do this is with inBuilt Sort
function moveElementToEndConcise(array, toMove) {
  return array.sort((a, b) => (a === toMove ? 0 : -1));
}
console.log(moveElementToEndConcise([2, 1, 2, 2, 2, 3, 4, 2], 2));
