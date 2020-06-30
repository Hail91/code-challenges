let globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
  let sortedArr = arr.slice(0);
  sortedArr.sort((a, b) => a - b);
  return sortedArr;
}
nonMutatingSort(globalArray);
