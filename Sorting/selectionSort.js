// Selection Sort here...
const selectionSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    let windowArray = array.slice(i);
    array.splice(array.indexOf(Math.min(...windowArray), i), 1);
    array.splice(i, 0, Math.min(...windowArray));
  }
  return array;
};
console.log(selectionSort([2, 5, 7, 1, 4, 3, 9, 6, 10, 3]));
