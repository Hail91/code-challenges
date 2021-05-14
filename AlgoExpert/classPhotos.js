function classPhotos(redShirtHeights, blueShirtHeights) {
  // Sort input arrays
  redShirtHeights = redShirtHeights.sort((a, b) => a - b);
  blueShirtHeights = blueShirtHeights.sort((a, b) => a - b);
  // Build function to check Rows
  function checkRows(firstRow, secondRow) {
    for (let i = 0; i < firstRow.length; ++i) {
      if (firstRow[i] > secondRow[i]) {
        continue;
      } else return false;
    }
    return true;
  }
  // Check each row for validity
  if (checkRows(redShirtHeights, blueShirtHeights)) {
    return true;
  } else if (checkRows(blueShirtHeights, redShirtHeights)) {
    return true;
  }
  // If neither condition is met, it's not possible...return false
  return false;
}
// Log output
console.log(classPhotos([3, 5, 6, 8, 2], [2, 4, 7, 5, 1]));
