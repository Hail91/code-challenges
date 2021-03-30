function lineEncoding(s) {
  // Variables
  let count = 0,
    output = "";
  // Iterate over string
  for (let i = 0; i < s.length; ++i) {
    // Check for consistency in next char
    if (s[i + 1] === s[i]) count += 1;
    // If not the same
    else {
      // Increment count before we update output
      count += 1;
      // Update output based on count
      count == 1 ? (output += `${s[i]}`) : (output += `${count}${s[i]}`);
      // Reset count for next iteration
      count = 0;
    }
  }
  // Return the encoded string
  return output;
}
