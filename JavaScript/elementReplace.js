var replaceElements = function (arr) {
  // Loop over array
  for (let i = 0; i < arr.length; i++) {
    if (i === arr.length - 1) {
      arr[i] = -1;
      return arr;
    }
    let tempArr = arr.slice(i + 1);
    let maxVal = Math.max(...tempArr);
    arr[i] = maxVal;
  }
};

console.log(replaceElements([17, 18, 5, 4, 6, 1]));
