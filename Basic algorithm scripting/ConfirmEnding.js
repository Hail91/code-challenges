// function confirmEnding(str, target) {
//   // get length of target string
//   let targetLen = target.length;
//   // Get last targetLen chars of 'str'
//   let slicedStr = str.slice(-targetLen);
//   if (slicedStr === target) {
//     return true;
//   } else {
//     return false;
//   }
// }

// Another way to write same solution
function confirmEnding(str, target) {
  if (str.endsWith(target) == true) {
    return true;
  } else return false;
}

console.log(confirmEnding("Bastian", "n"));
