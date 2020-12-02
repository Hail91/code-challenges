const fs = require("fs");
const input = [];
try {
  const data = fs.readFileSync("./inputs/Puzzle3Input.txt", "utf-8");
  const lines = data.split(/\r?\n/);
  lines.forEach((line) => {
    input.push(line);
  });
} catch (error) {
  console.log(error);
}

const validPassword = (passwords) => {
  let valid = 0;
  for (let i = 0; i < passwords.length; i++) {
    let criteria = passwords[i].split(" ");
    range = criteria[0].split("-");
    valToCheck = criteria[1][0];
    matcher = new RegExp(valToCheck, "g");
    if (criteria[2].match(matcher) === null) continue;
    else {
      if (
        criteria[2].match(matcher).length >= Math.min(...range) &&
        criteria[2].match(matcher).length <= Math.max(...range)
      ) {
        valid += 1;
      }
    }
  }
  return valid;
};

// Part two
const validPasswordPartTwo = (passwords) => {
  let valid = 0;
  for (let i = 0; i < passwords.length; i++) {
    let validChars = 0;
    criteria = passwords[i].split(" ");
    range = criteria[0].split("-");
    valToCheck = criteria[1][0];

    if (criteria[2][Math.min(...range) - 1] === valToCheck) validChars += 1;
    if (criteria[2][Math.max(...range) - 1] === valToCheck) validChars += 1;
    validChars == 1 ? (valid += 1) : null;
  }
  return valid;
};

console.log(validPasswordPartTwo(input));
