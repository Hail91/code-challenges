function arrayChange(inputArray) {
  // Will need a variable to track how many moves we've made.
  let moves = 0;
  // Need to check every number's next number and calculate the difference, the difference is the number of moves it'll take to get an increasing sequence.
  for (let i = 0; i < inputArray.length; i++) {
    // While the next value is less than or equal to current value
    while (inputArray[i + 1] <= inputArray[i]) {
      // increment it while also increment moves to track how many moves it took.
      inputArray[i + 1] += 1;
      moves += 1;
    }
  }
  return moves;
}

console.log(arrayChange([1, 1, 1]));
