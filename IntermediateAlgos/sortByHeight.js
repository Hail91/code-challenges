// Sort input Array ascending without modifying or moving -1 values.
function sortByHeight(a) {
  let tempArray = [];
  // Loop over 'a' array
  for (let i = 0; i < a.length; i++) {
    // Check for values that are greater than or equal to zero and push them to tempArray
    if (a[i] >= 0) {
      tempArray.push(a[i]);
    } else {
      continue;
    }
  }
  tempArray.sort((a, b) => a - b);
  // Loop over a again replacing elements not -1 as we go
  for (let j = 0; j < a.length; j++) {
    if (a[j] >= 0) {
      let min = Math.min(...tempArray);
      a.splice(j, 1, min);
      tempArray.splice(0, 1);
    } else {
      continue;
    }
  }
  return a;
}
// ** Better more concise solution **
// function sortByHeight(a) {
//     var s = a.filter(h => h > 0).sort((a, b) => a - b)
//     return a.map(p => {
//         if (p !== -1) {
//             return s.shift();
//         }

//         return -1;
//     })
// }

console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]));
