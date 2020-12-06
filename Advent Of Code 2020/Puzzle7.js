const fs = require("fs");
const input = [];
try {
  const data = fs.readFileSync("./inputs/Puzzle6Input.txt", "utf-8");
  const lines = data.split(/\r?\n/);
  lines.forEach((line) => {
    input.push(line);
  });
} catch (error) {
  console.log(error, "Error reading from file!");
}

const Customs = () => {
  // Function code here...
};
