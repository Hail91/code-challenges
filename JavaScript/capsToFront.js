// Takes a mixed case string and returns a string with only capital letters moved to the front.
function capToFront(s) {
  let tempArr = [];
  // Split string into array
  let strArray = s.split("");
  // Loop over array
  for (let i = strArray.length - 1; i > 0; i--) {
    let capitalized = strArray[i].toUpperCase();
    // check if a letter is capitalized
    if (strArray[i] === capitalized) {
      // If it is, splice it and use unshift to add to beginning of array
      let removed = strArray.splice(i, 1).toString();
      tempArr.push(removed);
    }
  }
  tempArr.reverse();
  return tempArr.concat(strArray).join("");
}
