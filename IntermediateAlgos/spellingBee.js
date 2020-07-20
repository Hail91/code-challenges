function validateSpelling(txt) {
  // Clean the string.
  txt = txt.replace(/[^a-zA-Z\s]/g, "").toLowerCase();
  // Split string on whitespace.
  let strArr = txt.split(" ");
  // Splice off last array element (str to compare)
  let checkStr = strArr.splice(strArr.length - 1, 1);
  // Loop over checkStr comparing against strArr
  for (let i = 0; i < checkStr[0].length; i++) {
    if (checkStr[0][i] === strArr[i]) {
      continue;
    } else {
      return false;
    }
  }
  return true;
}

console.log(validateSpelling("C. Y. T. O. P. L. A. S. M. Cytoplasm?"));
