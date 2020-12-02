const fs = require("fs");
// Array to store data
const input = [];
// Read Input data and push to global array to be called by validPassword function.
try {
  const data = fs.readFileSync("./inputs/Puzzle3Input.txt", "utf-8");
  const lines = data.split(/\r?\n/);
  // Loop over lines and push to input
  lines.forEach((line) => {
    input.push(line);
  });
} catch (error) {
  console.log(error);
}

const validPassword = () => {
  // Function content here...
};
