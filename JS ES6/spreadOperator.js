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

// ** Combine two arrays with spread operator **

function spreadOut() {
  let fragment = ["to", "code"];
  let sentence = ["learning", ...fragment, "is", "fun"];
  return sentence;
}

console.log(spreadOut());

// ** Need to google information about how spread really works under the hood. **
