function kadanesAlgorithm(array) {
  let maxEnding = array[0];
  let maxSoFar = array[0];
  let index = 1;
  let start;
  let end = array.length - 1;
  while (index < array.length) {
    let currValue = array[index];
    maxEnding = Math.max(currValue, maxEnding + currValue);
    maxSoFar = Math.max(maxSoFar, maxEnding);
    index += 1;
  }
  return maxSoFar;
}

console.log(kadanesAlgorithm([1, -3, 2, 1, 3]));
