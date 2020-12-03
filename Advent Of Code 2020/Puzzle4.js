const fs = require("fs");
const input = [];
try {
  const data = fs.readFileSync("./inputs/Puzzle4Input.txt", "utf-8");
  const lines = data.split(/\r?\n/);
  lines.forEach((line) => {
    input.push([line]);
  });
} catch (error) {
  console.log(error, "Error reading from file!");
}

const SledPath = (map) => {
  let treeCoords = [];
  rowPos = 0;
  currRow = 0;
  trees = 0;
  // While there are still rows to traverse
  while (currRow <= map.length) {
    if (map[currRow] === undefined) break;
    if (rowPos >= map[currRow][0].length - 3) {
      if (map[currRow][0][rowPos] === "#") {
        treeCoords.push([rowPos, currRow, "X"]);
        trees += 1;
        rowPos = Math.abs(map[currRow][0].length - (rowPos + 3));
        currRow += 2;
        continue;
      } else {
        treeCoords.push([rowPos, currRow, "0"]);
        rowPos = Math.abs(map[currRow][0].length - rowPos + 3);
        currRow += 2;
        continue;
      }
    } else if (
      map[currRow][0][rowPos] === "#" &&
      rowPos < map[currRow][0].length - 3
    ) {
      treeCoords.push([rowPos, currRow, "X"]);
      trees += 1;
      rowPos += 3;
      currRow += 1;
    } else {
      treeCoords.push([rowPos, currRow, "0"]);
      rowPos += 3;
      currRow += 1;
      continue;
    }
  }
  return trees;
};

console.log(SledPath(input));
