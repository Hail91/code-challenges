function kadanesAlgorithm(array) {
  let maxEnding = array[0];
  let maxSoFar = array[0];
  let index = 1;
  while (index < array.length) {
    let currValue = array[index];
    maxEnding = Math.max(currValue, maxEnding + currValue);
    maxSoFar = Math.max(maxSoFar, maxEnding);
    console.log(
      `currValue: ${currValue}, Max Ending: ${maxEnding}, MaxSoFar: ${maxSoFar}`
    );
    index += 1;
  }
}

console.log(
  kadanesAlgorithm([3, 5, -9, 1, 3, -2, 3, 4, 7, 2, -9, 6, 3, 1, -5, 4])
);
