function seatsInTheater(nCols, nRows, col, row) {
  // Subtract col - 1 from nCols
  let cols = nCols - (col - 1);
  // Subtract row from nRows
  let rows = nRows - row;
  // Multiply the results
  return cols * rows;
}

console.log(seatsInTheater(16, 11, 5, 3));
