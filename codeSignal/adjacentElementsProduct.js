function adjacentElementsProduct(inputArray) {
  let sums = inputArray.map((el, index, array) => {
    if (index === array.length - 1) return;
    else return array[index] * array[index + 1];
  });
  let output = sums.filter((el) => el !== undefined);
  return Math.max(...output);
}
console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));
