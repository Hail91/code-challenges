// function areSimilar(a, b) {
//   let fast = 1;
//   function compare(arr1, arr2) {
//     if (JSON.stringify(arr1) === JSON.stringify(arr2)) {
//       return true;
//     } else {
//       return false;
//     }
//   }
//   if (compare(a, b) === true) {
//     return true;
//   } else {
//     // Logic to compare otherwise here...
//     // Loop over first array checking values
//     for (let i = 0; i < a.length - 1; i++) {
//       fast = i + 1;
//       while (fast < a.length) {
//         // Swap values
//         [a[i], a[fast]] = [a[fast], a[i]];
//         // Check a against b for equality
//         if (JSON.stringify(a) === JSON.stringify(b)) {
//           return true;
//         } else {
//           [a[i], a[fast]] = [a[fast], a[i]];
//           fast += 1;
//         }
//       }
//     }
//     fast = 1;
//     for (let j = 0; j < b.length - 1; j++) {
//       fast = j + 1;
//       while (fast < b.length) {
//         [b[j], b[fast]] = [b[fast], b[j]];
//         // Check b against a for equality
//         if (JSON.stringify(b) === JSON.stringify(a)) {
//           return true;
//         } else {
//           [b[j], b[fast]] = [b[fast], b[j]];
//           fast += 1;
//         }
//       }
//     }
//     return false;
//   }
// }

function areSimilar(a, b) {
  // Track indexes of where values differ
  let differenceArr = [];
  // Loop over first Array
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      differenceArr.push(i);
    }
    if (differenceArr.length > 2) {
      return false;
    }
    if (differenceArr.length === 2) {
      // use the diff array indices to swap,  if swapped pairs are not eqaul return false;
      if (
        a[differenceArr[0]] !== b[differenceArr[1]] ||
        a[differenceArr[1]] !== b[differenceArr[0]]
      ) {
        return false;
      }
    }
  }
  return differenceArr.length === 0 || differenceArr.length === 2;
}
