const fs = require("fs");
// const input = ["abc", "abc", "abac", "aaaa", "b"];
const input = [];
try {
  const data = fs.readFileSync("./inputs/Puzzle7Input.txt", "utf-8");
  const lines = data.split(/\r?\n/);
  let tempStr = "";
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].length > 0) {
      tempStr += lines[i];
    } else if (lines[i].length === 0) {
      input.push(tempStr);
      tempStr = "";
    }
  }
  input.push(tempStr);
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
      // Populate hashtable
      if (form[i][j] in answerDict) {
        continue;
      } else answerDict[form[i][j]] = 1;
    }
    sum += Object.values(answerDict).reduce((a, b) => a + b);
    answerDict = {};
  }
  return sum;
};

console.log(Customs(input));
