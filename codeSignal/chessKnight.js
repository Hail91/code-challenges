function chessKnight(cell) {
  // Instantiate chessBoard with number of moves possible from each cell
  const chessBoard = [
    [2, 3, 4, 4, 4, 4, 3, 2],
    [3, 4, 6, 6, 6, 6, 4, 3],
    [4, 6, 8, 8, 8, 8, 6, 4],
    [4, 6, 8, 8, 8, 8, 6, 4],
    [4, 6, 8, 8, 8, 8, 6, 4],
    [4, 6, 8, 8, 8, 8, 6, 4],
    [3, 4, 6, 6, 6, 6, 4, 3],
    [2, 3, 4, 4, 4, 4, 3, 2],
  ];
  // Get the location of the Knight on the board
  const knightLocation = cell[0].charCodeAt() - 97;
  // Return the number of moves by calculating where on board we are and return that value
  return chessBoard[cell[1] - 1][knightLocation]; // <--- Subract 1 due to offset, tehnically lowest row is 1, but arrays index from 0.
}
// Log output
console.log(chessKnight("a1"));
