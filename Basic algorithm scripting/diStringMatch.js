// const diStringMatch = function (S) {
//   let result = [];
//   let indexes = S.split("").map((val, i, arr) => {
//     return i;
//   });
//   indexes.push(S.length);
//   for (let i = 0; i <= S.length; i++) {
//     if (S[i] === "I") {
//       result.push(...indexes.splice(indexes.indexOf(Math.min(...indexes)), 1));
//     } else
//       result.push(...indexes.splice(indexes.indexOf(Math.max(...indexes)), 1));
//   }
//   return result;
// };

// console.log(diStringMatch("DDI"));

const diStringMatch = function (S) {
  let result = [];
  // Can do it all in one pass by setting beginning and end pointers in our loop
  for (let i = 0, start = 0, end = S.length; i <= S.length; i++) {
    if (S[i] === "I") {
      result.push(start++);
    } else result.push(end--);
  }
  return result;
};

console.log(diStringMatch("DDI"));
