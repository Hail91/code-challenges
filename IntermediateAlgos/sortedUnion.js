function uniteUnique(arr) {
  let completeArr = [];
  let returnArr = [];
  for (let i = 0; i < arguments.length; i++) {
    completeArr.push(...arguments[i]);
  }
  for (let j = 0; j < completeArr.length; j++) {
    if (returnArr.includes(completeArr[j])) {
      continue;
    } else {
      returnArr.push(completeArr[j]);
    }
  }
  return returnArr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
