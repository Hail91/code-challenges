function alphabeticShift(inputString) {
  // Create alphabet Array
  let alpha = [...Array(26)].map((val, i) =>
    String.fromCharCode(i + 65).toLowerCase()
  );
  inputString = inputString.split("").map((char, index) => {
    if (char === "z") {
      return (char = "a");
    } else {
      return (char = alpha[alpha.indexOf(char) + 1]);
    }
  });
  return inputString.join("");
}

console.log(alphabeticShift('crazy'))