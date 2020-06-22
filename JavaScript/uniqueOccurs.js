// Should be O(n) time
const uniqueOccurrences = function (arr) {
  let numObj = {};
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] in numObj) {
      numObj[arr[i]] = numObj[arr[i]] + 1;
    } else {
      numObj[arr[i]] = 1;
    }
  }
  let occurrences = Object.values(numObj);
  let unique = new Set(occurrences);
  if (occurrences.length === unique.size) {
    return true;
  } else {
    return false;
  }
};

console.log(uniqueOccurrences(1, 2, 2, 3, 3, 3));
