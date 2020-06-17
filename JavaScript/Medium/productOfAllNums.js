// Return array of values that is equal to all the values of arr multiplied by all other values except itself.

function productOfAllNums(arr) {
  arr = arr.sort((a, b) => a - b);
  let numDict = {};
  let resArr = [];
  for (let i = 0; i < arr.length; i++) {
    numDict[arr[i]] = [];
  }
  for (let x = 0; x < arr.length; x++) {
    for (let [key, value] of Object.entries(numDict)) {
      if (value.includes(arr[x]) || arr[x] === parseInt(key)) {
        continue;
      } else {
        value.push(arr[x]);
      }
    }
  }

  for (let [key, value] of Object.entries(numDict)) {
    let res = value.reduce((a, b) => a * b);
    resArr.push(res);
  }
}

console.log(productOfAllNums([1, 7, 3, 4]));
