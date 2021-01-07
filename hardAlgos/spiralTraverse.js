function spiralTraverse(array) {
  let startRow = 0;
  startCol = 0;
  endRow = array.length - 1;
  endCol = array[0].length - 1;
  let output = [];
  while (startRow <= endRow && startCol <= endCol) {
    for (let currColumn = startCol; currColumn <= endCol; currColumn += 1) {
      output.push(array[startRow][currColumn]);
    }
    for (let currRow = startRow + 1; currRow <= endRow; currRow += 1) {
      output.push(array[currRow][endCol]);
    }
    for (let currCol = endCol - 1; currCol >= startCol; currCol -= 1) {
      if (startRow === endRow) break;
      output.push(array[endRow][currCol]);
    }
    for (let currRow = endRow - 1; currRow > startRow; currRow -= 1) {
      if (startCol === endCol) break;
      output.push(array[currRow][startCol]);
    }
    startRow += 1;
    startCol += 1;
    endRow -= 1;
    endCol -= 1;
  }
  return output;
}

console.log(
  spiralTraverse([
    [1, 2, 3, 4],
    [12, 13, 14, 5],
    [11, 16, 15, 6],
    [10, 9, 8, 7],
  ])
);
