function binaryAgent(str) {
  // Split input string into an array on whitespace
  str = str.split(" ");
  // Create newString that will return the decoded string.
  let newString = "";
  // Loop over array converting each binary number to text
  for (let i = 0; i < str.length; i++) {
    // Parse the binary into ascii
    str[i] = Number(parseInt(str[i], 2).toString(10));
    // Convert ascii representation into English text
    str[i] = String.fromCharCode(str[i]);
    // Concatenate that to newString
    newString += str[i];
  }
  // Return newString
  return newString;
}

binaryAgent(
  "01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"
);
