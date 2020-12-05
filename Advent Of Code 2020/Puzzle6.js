const fs = require("fs");
const input = [];
let rows = [];
try {
  const data = fs.readFileSync("./inputs/Puzzle6Input.txt", "utf-8");
  const lines = data.split(/\r?\n/);
  lines.forEach((line) => {
    input.push(line);
  });
} catch (error) {
  console.log(error, "Error reading from file!");
}

// Calculate row number
const BinaryBoardingRow = (seatMap) => {
  let start = 0;
  let end = 127;
  for (let i = 0; i < seatMap.length; i++) {
    for (let s = 0; s < seatMap[i].length - 3; s++) {
      if (seatMap[i][s] === "F") {
        end = Math.floor((start + end) / 2);
      } else if (seatMap[i][s] === "B") {
        start = Math.ceil((start + end) / 2);
      }
    }
    if (seatMap[i][6] === "F") {
      rows.push(
        Math.min(...[start, end]) * 8 + BinaryBoardingColumn(seatMap[i])
      );
      start = 0;
      end = 127;
    } else {
      rows.push(
        Math.max(...[start, end]) * 8 + BinaryBoardingColumn(seatMap[i])
      );
      start = 0;
      end = 127;
    }
  }
};

// Calculate Column Number
const BinaryBoardingColumn = (string) => {
  let start = 0;
  let end = 7;
  for (let s = 7; s < string.length; s++) {
    if (string[s] === "L") {
      end = Math.floor((start + end) / 2);
    } else if (string[s] === "R") {
      start = Math.ceil((start + end) / 2);
    }
  }
  if (string[9] === "L") return Math.min(...[start, end]);
  else return Math.max(...[start, end]);
};

console.log(BinaryBoardingRow(input));
console.log(Math.max(...rows));
