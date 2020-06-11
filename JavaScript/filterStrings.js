// Function takes input array of strings and integers and returns array of only integers.

function filterArray(arr) {
  filteredArr = arr.filter((element) => Number.isInteger(element));
  return filteredArr;
}

console.log(filterArray([1, 2, "a", "b"]));
