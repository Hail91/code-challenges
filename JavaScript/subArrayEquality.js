var canBeEqual = function (target, arr) {
  if (JSON.stringify(target) === JSON.stringify(arr)) return true;
  for (let i = 0; i < target.length; i++) {
    if (!arr.includes(target[i])) return false;
    let subArray = arr.slice(i, arr.indexOf(target[i], i) + 1);
    subArray.reverse();
    arr.splice(i, subArray.length);
    arr.splice(i, 0, ...subArray);
    if (JSON.stringify(target) === JSON.stringify(arr)) {
      return true;
    } else continue;
  }
  return false;
};

console.log(canBeEqual([1, 2, 3, 4], [2, 4, 3, 1]));
