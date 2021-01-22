// Not a great solution because if our max is something crazy way, we loop an uneccesarily high number of times
// function makeArrayConsecutive2(statues) {
//   let additionalStatues = [];
//   for (let i = Math.min(...statues); i < Math.max(...statues); ++i) {
//     if (!statues.includes(i)) {
//       additionalStatues.push(i);
//     } else continue;
//   }
//   return additionalStatues.length;
// }

// Much faster approach
function makeArrayConsecutive2(statues) {
  // Calculate total number of values in the range, then subtract the total number of values we have.
  console.log(Math.max(...statues) - Math.min(...statues) + 1 - statues.length);
}

// Log output
console.log(makeArrayConsecutive2([2, 3, 5, 6, 8]));
