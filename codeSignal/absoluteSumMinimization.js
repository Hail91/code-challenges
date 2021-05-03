// Good luck explaining this one. LOL
function absoluteValuesSumMinimization(array) {
  let absVal;
  let hashmap = {};
  let vals = [];
  for (let i = 0; i < array.length; i++) {
    let pointer = 0;
    while (vals.length < array.length) {
      absVal = Math.abs(array[i] - array[pointer]);
      vals.push(absVal);
      pointer += 1;
    }
    if (
      [...vals].reduce((x, y) => x + y) < Math.min(...Object.values(hashmap))
    ) {
      hashmap[array[i]] = [...vals].reduce((x, y) => x + y);
    }
    vals.length = 0;
  }
  return Number(
    Object.keys(hashmap).reduce((value, key) =>
      hashmap[value] < hashmap[key] ? value : key
    )
  );
}
// Log output
console.log(absoluteValuesSumMinimization([2, 4, 7]));

function absoluteValuesSumMinimizationRefactor(Array) {
  return Array[Math.ceil(Array.length / 2) - 1];
}
// Log output
console.log(absoluteValuesSumMinimizationRefactor([2, 4, 7, 9, 10, 14, 15]));
