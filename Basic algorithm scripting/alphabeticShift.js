function alphabeticShift(inputString) {
  // Create alphabet Array
  let alpha = [...Array(26)].map((val, i) =>
    String.fromCharCode(i + 65).toLowerCase()
  );
  // Simplify return into chained return
  return (
    inputString
      // Split into array
      .split("")
      // Map over array
      .map((char, index) => {
        // If the character is z, switch with 'a' since we're shifting right by 1.
        if (char === "z") {
          return (char = "a");
          // Otherwise just reassign the character to the character to the right by 1
        } else return (char = alpha[alpha.indexOf(char) + 1]);
      })
      // Join back into single string
      .join("")
  );
}
console.log(alphabeticShift("crazy"));
