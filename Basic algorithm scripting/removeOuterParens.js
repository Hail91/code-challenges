var removeOuterParentheses = function (S) {
  // Need to track where the outermost parenthese is from the starter
  let parensTracker = 0;
  // Array on indexes to be removed
  let parensArray = [];
  // NewStr to append to
  let newStr = S.split("");
  // Loop over String
  for (let i = 0; i <= S.length; i++) {
    if (i === 0) {
      parensArray.push(i);
      parensTracker += 1;
      continue;
    }
    // If parensTracker is 0
    if (parensTracker === 0) {
      // remove char at i
      parensArray.push(i - 1, i);
      parensTracker += 1;
      continue;
    }
    if (parensTracker > 0 && S[i] === "(") parensTracker += 1;
    else if (parensTracker > 0 && S[i] === ")") {
      parensTracker -= 1;
    }
  }
  // Loop over Parens array and adjust S as needed
  for (let j = 0; j < parensArray.length - 1; j++) {
    newStr.splice(parensArray[j], 1);
    newStr.unshift("-");
  }
  newStr.splice(0, parensArray.length - 1);
  return newStr.join("");
};

console.log(removeOuterParentheses("(()())(())(()(()))"));
