const sortString = function (s) {
  let count = 0;
  let flipped = false;
  let results = [];
  // Need a variable 'result' to return
  let charCodes = s.split("").map((char, idx) => {
    return s.charCodeAt(idx);
  });
  charCodes = charCodes.sort((a, b) => a - b);
  let smallest = Math.min(...charCodes);
  let largest = Math.max(...charCodes);
  // Loop over charCodes
  while (count < s.length) {
    if (flipped == false) {
      results.push(smallest);
      count += 1;
      for (let i = 0; i < s.length; i++) {
        // Check if current value is < than smallest, if not...move onto next
        if (charCodes[i] <= smallest) {
          continue;
        } else {
          results.push(charCodes[i]);
          count += 1;
          smallest = charCodes[i];
        }
      } // for loop ends here
      if (results.length !== s.length) {
        flipped = true;
        smallest = Math.min(...charCodes);
        if (flipped == true) {
          results.push(largest);
          count += 1;
          for (let j = s.length - 1; j > 0; j--) {
            // Check if current value is < than smallest, if not...move onto next
            if (charCodes[j] >= largest) {
              continue;
            } else {
              results.push(charCodes[j]);
              count += 1;
              largest = charCodes[j];
            }
          }
          flipped = false;
          largest = Math.max(...charCodes);
        }
      }
    }
  }
  let final = results.map((c) => {
    return String.fromCharCode(c);
  });
  return final.join("");
};

console.log(sortString("leetcode"));
