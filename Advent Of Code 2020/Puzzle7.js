const fs = require("fs");
const input = [];
try {
  const data = fs.readFileSync("./inputs/Puzzle7Input.txt", "utf-8");
  const lines = data.split(/\r?\n/);
  let temp = [];
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].length > 0) {
      temp.push(lines[i]);
    } else if (lines[i].length === 0) {
      input.push(temp);
      temp = [];
    }
  }
  input.push(temp);
} catch (error) {
  console.log(error, "Error reading from file!");
}

const Customs = (form) => {
  let sum = 0;
  let answerDict = {};
  // Loop the form
  for (let i = 0; i < form.length; i++) {
    // Then loop our array of acceptable chars, if string contains char increment sum
    for (let j = 0; j < form[i].length; j++) {
      // Calculate sum for each string in array
      for (let k = 0; k < form[i][j].length; k++) {
        if (form[i][j][k] in answerDict) {
          answerDict[form[i][j][k]] += 1;
        } else answerDict[form[i][j][k]] = 1;
      }
    }
    sum += Object.values(answerDict).filter((count) => count === form[i].length)
      .length;
    answerDict = {};
  }
  return sum;
};

console.log(Customs(input));
