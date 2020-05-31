// Return number of valleys gary walks through on his hike. (Valley is considering a step back up to sea level from being below sea level)
function countingValleys(n, s) {
  // Need a variable to store number of valleys walked through
  let valleys = [];
  let result = 0;
  // Need variable to track gary's altitude
  let altitude = 0;
  // Initialize an altitude array at 0 to represent gary starting at sea level
  let altArr = [0];
  // Loop over path gary takes
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "U") {
      altitude += 1;
      altArr.push(altitude);
    }
    if (s[i] === "D") {
      altitude -= 1;
      altArr.push(altitude);
    }
  }
  for (let x = 0; x < altArr.length; x++) {
    if (Math.sign(altArr[x]) === -1 && Math.sign(altArr[x + 1]) === 0) {
      result += 1;
    }
  }
  return result;
}

console.log(
  countingValleys(10, ["D", "D", "U", "U", "D", "D", "D", "U", "U", "U"])
);
