function chessBoardCellColor(cell1, cell2) {
  // Define board with hashtable
  let board = {
    A: 1,
    B: 2,
    C: 3,
    D: 4,
    E: 5,
    F: 6,
    G: 7,
    H: 8,
  };
  // Determine total betweem both chars
  const first = board[cell1[0]] + parseInt(cell1[1]);
  const second = board[cell2[0]] + parseInt(cell2[1]);
  // If they match, they must be the same color.
  return first % 2 === second % 2;
}
// Log output
console.log(chessBoardCellColor("A1", "C3"));
