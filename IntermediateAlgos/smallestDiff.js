function smallestDifference(arrayOne, arrayTwo) {
  // Sort arrays
  arrayOne = arrayOne.sort((a, b) => a - b);
  arrayTwo = arrayTwo.sort((a, b) => a - b);
  // Use pointer method
  // Start both pointers at same place in each sorted array
  let pointerOne = 0;
  let pointerTwo = 0;
  let diff;
  while (
    pointerOne <= arrayOne.length - 1 &&
    pointerTwo <= arrayTwo.length - 1
  ) {
    if (Math.abs(arrayOne[pointerOne] - arrayTwo[pointerTwo]) === 0) {
      break;
    } else {
      if (diff < Math.abs(arrayOne[pointerOne] - arrayTwo[pointerTwo + 1])) {
        break;
      }
      if (diff < Math.abs(arrayOne[pointerOne + 1] - arrayTwo[pointerTwo])) {
        break;
      } else if (arrayOne[pointerOne] > arrayTwo[pointerTwo]) pointerTwo += 1;
      else pointerOne += 1;
    }
    // Check diff from curr Diff
    diff = Math.abs(arrayOne[pointerOne] - arrayTwo[pointerTwo]);
  }
  return [arrayOne[pointerOne], arrayTwo[pointerTwo]];
}

console.log(
  smallestDifference(
    [10, 1000, 9124, 2142, 59, 24, 596, 591, 124, -123, 530],
    [-1441, -124, -25, 1014, 1500, 660, 410, 245, 530]
  )
);
