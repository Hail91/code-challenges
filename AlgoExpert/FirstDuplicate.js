// function firstDuplicateValue(array) {
//   let DuplicateHash = {};
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] in DuplicateHash) {
//       DuplicateHash[array[i]] += 1;
//       if (DuplicateHash[array[i]] == 2) {
//         return array[i];
//       }
//     } else DuplicateHash[array[i]] = 1;
//   }
//   return -1;
// }
// console.log(firstDuplicateValue([2, 1, 5, 2, 3, 3, 4]));

// Alternative solution using O(1) space
function firstDuplicateValue(array) {
  for (const value of array) {
    const absoluteValue = Math.abs(value);
    if (array[absoluteValue - 1] < 0) return absoluteValue;
    array[absoluteValue - 1] *= -1;
  }
  return -1;
}
console.log(firstDuplicateValue([2, 1, 5, 2, 3, 3, 4]));
