function boxBlur(image) {
  let blurred = [];
  for (let i = 1; i < image.length - 1; i++) {
    let row = [];
    for (let j = 1; j < image[i].length - 1; j++) {
      let average = image[i - 1][j - 1] + image[i - 1][j] + image[i - 1][j + 1];
      average += image[i][j - 1] + image[i][j] + image[i][j + 1];
      average += image[i + 1][j - 1] + image[i + 1][j] + image[i + 1][j + 1];
      row.push(Math.floor(average / 9));
    }
    blurred.push(row);
  }
  return blurred;
}

console.log(
  boxBlur([
    [7, 4, 0, 1],
    [5, 6, 2, 2],
    [6, 10, 7, 8],
    [1, 4, 2, 0],
  ])
);
