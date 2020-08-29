var restoreString = function (s, indices) {
  // Split input string into array
  let copy = s;
  s = s.split("");
  // Loop over that array and replace current element with proper char at indice
  for (let i = 0; i < s.length; i++) {
    s[indices[i]] = copy[i];
  }
  return s.join("");
};

console.log(restoreString("codeleet", [4, 5, 6, 7, 0, 2, 1, 3]));
