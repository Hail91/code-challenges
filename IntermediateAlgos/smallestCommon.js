function smallestCommons(arr) {
  // Sort array first
  arr.sort((a, b) => a - b);
  // Get initial multiplier
  let multiplied = arr[1] * 2;
  // Set counter pointer to first value in array initially, we'll increment in the loop as necessary.
  let counter = arr[0];
  // While counter is less than the upper bound of array...
  while (counter < arr[1]) {
    // If value of multiplied is divisible by the lower bound of array evenly...
    if (multiplied % counter === 0) {
      // Move counter to check next value
      counter += 1;
      // Continue looping
      continue;
    } else {
      // Otherwise, we've hit a breakpoint, increment multiplied and start over
      multiplied += arr[1];
      // Reset counter
      counter = arr[0];
    }
  }
  // Return multiplied if we make it all the way through a loop
  return multiplied;
}

console.log(smallestCommons([23, 18]));
