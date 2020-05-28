// Return all strings of length 4 from the input Array

function isFourLetters(arr) {
  filtered = arr.filter((v) => {
    if (v.length === 4) {
      return v;
    }
  });
  return filtered;
}

console.log(isFourLetters(["Kangaroo", "Bear", "Fox"]));
