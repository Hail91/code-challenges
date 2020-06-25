// IndexOf will return -1 if element does not exist on array, otherwise it will return index it exists at.
function quickCheck(arr, elem) {
  if (arr.indexOf(elem) >= 0) {
    return true;
  } else {
    return false;
  }
}

console.log(quickCheck(["squash", "onions", "shallots"], "mushrooms"));
