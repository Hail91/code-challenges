function boxBlur(image) {
  // Need to access every 3 values across of each subArray while subArray[i] + 2 is NOT undefined, AND while there are multiples of 3 values available in each SubArray
  // This should give us all possible 3x3 squares.
  // Will need to keep track of number of pixels we're dealing with, as well as a sum of pixel values so we can do some math at the end to calculate the final integer result.
  let runningSum = 0;
  let tempSum = 0;
  let numPixels = 0;
  for (let i = 0; i < image.length; i++) {
    // While image[i] + 2 is NOT undefined
    while (image[i + 1] !== undefined) {
      // Loop over SubArray
      for (let j = 0; j < image[i].length; j++) {
        // If j + 2 is NOT undefined, perform necessary logic
        while (image[i][j + 2] !== undefined) {
          runningSum = image[i][j] + image[i][j + 1] + image[i][j + 2];
          tempSum += runningSum;
          numPixels += 3;
          break;
        }
      }
      break;
    }
  }
  return Math.floor(runningSum / numPixels);
}

console.log(
  boxBlur([
    [7, 4, 0, 1],
    [5, 6, 2, 2],
    [6, 10, 7, 8],
    [1, 4, 2, 0],
  ])
);
