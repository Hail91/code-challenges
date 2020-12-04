const fs = require("fs");
const input = [];
try {
  const data = fs.readFileSync("./inputs/Puzzle4Input.txt", "utf-8");
  const lines = data.split(/\r?\n/);
  lines.forEach((line) => {
    input.push(line.split(""));
  });
} catch (error) {
  console.log(error, "Error reading from file!");
}

const SledPath = (right, map) => {
  // Set total area height, as well as width of each 'row' (they'll all be 31)
  let height = map.length;
  let width = map[0].length;
  // Set variables to track number of trees and steps taken
  let trees = 0;
  let stepNumber = 0;
  // loop 'down' the 'map/hill'
  for (let row = 1; row < height; row++) {
    // Increment stepNumber
    stepNumber += 1;
    // Use modulo to 'skip' back to the front of the row when we can't make another 3 steps to the right
    let xPosition = (stepNumber * right) % width;
    // Check for a tree at xPosition in our map/hill
    if (map[row][xPosition] === "#") {
      trees += 1;
    }
  }
  return trees;
};

console.log(SledPath(3, input));
