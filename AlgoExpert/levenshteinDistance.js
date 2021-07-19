function levenshteinDistance(str1, str2) {
  // Build table for calculations of possible changes needed based on all combinations of characters
  let combinations = [];
  // Loop over string2 (string that we need to make string1 into)
  for (let i = 0; i < str2.length + 1; i++) {
    // Instantiate inner array for every char of string2
    let inner = [];
    // Loop over string1 and push
    for (let j = 0; j < str1.length + 1; ++j) {
      inner.push(j);
    }
    // Set first value of row
    inner[0] = i;
    // Push inner row into combinations on each iteration over string2
    combinations.push(inner);
  }
  // Log the table
  console.log(combinations);
  // Part 2 --> Iterate over built table and run calculations
  for (let i = 1; i < str2.length + 1; ++i) {
    for (let j = 1; j < str1.length + 1; ++j) {
      // If the characters are the same...
      if (str2[i - 1] === str1[j - 1]) {
        // Update the number of changes required in the table
        combinations[i][j] = combinations[i - 1][j - 1];
      } else {
        // Otherwise grab the smallest number of changes required from the table and set
        combinations[i][j] =
          1 +
          Math.min(
            combinations[i - 1][j - 1],
            combinations[i - 1][j],
            combinations[i][j - 1]
          );
      }
    }
  }
  // Return final number of changes after running all the req'd calculations
  return combinations[str2.length][str1.length];
}

console.log(levenshteinDistance("abc", "yabd"));
