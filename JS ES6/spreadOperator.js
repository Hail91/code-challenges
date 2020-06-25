// Should spread in 'num' copies of input array and return that newArr.
function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    // Spread operator is a nice concise way to copy an entire array where needed.
    newArr.push([...arr]);
    num--;
  }
  return newArr;
}

console.log(copyMachine([true, false, true], 2));
