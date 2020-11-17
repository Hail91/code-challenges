const canFormArray = function (arr, pieces) {
  for (let i = 0; i < arr.length; i) {
    let value = pieces.find((v) => v[0] === arr[i]);
    if (!value) {
      return false;
    } else if (value.length == 1) {
      i += 1;
      continue;
    } else {
      let len = value.length;
      let copy = arr.slice(i, i + len);
      if (JSON.stringify(copy) === JSON.stringify(value)) {
        i += len;
        continue;
      } else return false;
    }
  }
  return true;
};

console.log(canFormArray([49, 18, 16], [[16, 18, 49]]));
