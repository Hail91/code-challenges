function steamrollArray(arr) {
  let returnArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      returnArr = returnArr.concat(steamrollArray(arr[i]));
    } else {
      returnArr.push(arr[i]);
    }
  }
  return returnArr;
}

steamrollArray([1, [2], [3, [[4]]]]);
