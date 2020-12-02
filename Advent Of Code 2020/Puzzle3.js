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

const validPassword = (passwords) => {
  let valid = 0;
  // Loop over array of strings
  for (let i = 0; i < passwords.length; i++) {
    // Split string into array
    let criteria = passwords[i].split(" ");
    // Loop that array^ and set the acceptable range, the value to check
    let range = criteria[0].split("-");
    // Set min and max for acceptable ranges
    let min = Math.min(...range);
    let max = Math.max(...range);
    let valToCheck = criteria[1][0];
    // Use Regex matching to find number of occurences of valToCheck in string
    let matcher = new RegExp(valToCheck, "g");
    if (criteria[2].match(matcher) === null) continue;
    else {
      if (
        criteria[2].match(matcher).length >= min &&
        criteria[2].match(matcher).length <= max
      ) {
        valid += 1;
      }
    }
  }
  return valid;
};

console.log(validPassword(input));
