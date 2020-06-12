// Return the number of steps it takes to get num to see if you can only divide by two when num is even, and subtract by 1 when num is odd.

const numberOfSteps = function (num) {
  let numOperations = 0;
  while (num > 0) {
    if (num % 2 === 0) {
      num = num / 2;
      numOperations += 1;
    }
    if (num % 2 !== 0) {
      num = num - 1;
      numOperations += 1;
    }
  }
  return numOperations;
};

console.log(numberOfSteps(14));
