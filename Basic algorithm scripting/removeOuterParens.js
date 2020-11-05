const removeOuterParentheses = function (S) {
  // Need to track where the outermost parenthese is from the starter
  let parensTracker = 0;
  let newStr = S.split("");
  // Loop over String
  for (let i = 0; i <= S.length; i++) {
    if (i === S.length) break;
    // If parensTracker is 0
    if (parensTracker === 0 && i === 0) {
      // remove char at i
      newStr.splice(i, i + 1);
      // Increment tracker
      parensTracker += 1;
      continue;
    }
    if (parensTracker === 0 && i !== 0) {
      // remove char at i
      newStr.splice(i - 2, 1);
      continue;
    }
    if (parensTracker > 0 && S[i] === "(") parensTracker += 1;
    else if (parensTracker > 0 && S[i] === ")") {
      parensTracker -= 1;
    }
  }
  return newStr.join("");
};

console.log(removeOuterParentheses("()()(())"));
