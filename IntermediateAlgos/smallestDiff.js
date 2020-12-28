function smallestDifference(arrayOne, arrayTwo) {
  // Sort arrays
  arrayOne = arrayOne.sort((a, b) => a - b);
  arrayTwo = arrayTwo.sort((a, b) => a - b);
  // Establish pointers
  let firstP = 0;
  let secondP = 0;
  // Establish smallest difference and current difference
  let smallestDiff = Infinity;
  let currentDiff;
  let result = [];
  // Loop until one of the pointers reaches the end of it's respective array
  while (firstP < arrayOne.length && secondP < arrayTwo.length) {
    let first = arrayOne[firstP];
    let second = arrayTwo[secondP];
    if (first < second) {
      currentDiff = second - first;
      firstP++;
    } else if (second < first) {
      currentDiff = first - second;
      secondP++;
    } else return [first, second];
    if (smallestDiff > currentDiff) {
      smallestDiff = currentDiff;
      result = [first, second];
    }
  }
  return result;
}

console.log(
  smallestDifference(
    [10, 1000, 9124, 2142, 59, 24, 596, 591, 124, -123, 530],
    [-1441, -124, -25, 1014, 1500, 660, 410, 245, 530]
  )
);
