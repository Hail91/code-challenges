function pairElement(str) {
  // Store DNA pairs as keys/values in an object
  let dnaObj = { A: "T", T: "A", C: "G", G: "C" };
  // Create an empty array as the outer array of 2D array.
  let outerDnaArr = [];
  // Loop over string
  for (let s = 0; s < str.length; s++) {
    // Loop over Object comparing keys to string values
    for (let [key, value] of Object.entries(dnaObj)) {
      // If they match, replace the current string value with the object key[value]
      if (str[s] === key) {
        outerDnaArr.push([str[s], dnaObj[key]]);
      }
    }
  }
  return outerDnaArr;
}

pairElement("GCG");
