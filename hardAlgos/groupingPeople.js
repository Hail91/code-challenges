var groupThePeople = function (groupSizes) {
  let arrayObj = {};
  let results = [];
  for (let i = 0; i < groupSizes.length; i++) {
    if (groupSizes[i] in arrayObj) {
      arrayObj[groupSizes[i]].push(i);
      if (arrayObj[groupSizes[i]].length === groupSizes[i]) {
        let tempArr = JSON.stringify(arrayObj[groupSizes[i]]);
        results.push(JSON.parse(tempArr));
        arrayObj[groupSizes[i]].length = 0;
      }
    } else {
      arrayObj[groupSizes[i]] = [i];
      if (arrayObj[groupSizes[i]].length === groupSizes[i]) {
        let tempArr = JSON.stringify(arrayObj[groupSizes[i]]);
        results.push(JSON.parse(tempArr));
        arrayObj[groupSizes[i]].length = 0;
      }
    }
  }
  return results;
};

console.log(groupThePeople([3, 3, 3, 3, 1, 3]));
