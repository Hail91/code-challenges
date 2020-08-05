function reverseInParentheses(inputString) {
  // Check if InputString contains lowercase english letters
  if (inputString.match(/\([a-z]*\)/)) {
    // If so, call function recursively replacing parens as we go using regex
    return reverseInParentheses(
      inputString.replace(
        /\([a-z]*\)/,
        Array.from(inputString.match(/\([a-z]*\)/)[0].replace(/\(|\)/g, ""))
          .reverse()
          .join("")
      )
    );
  } else {
    return inputString;
  }
}
