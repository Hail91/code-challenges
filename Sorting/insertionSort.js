function insertionSort(array) {
  let sorted = [array[0]];
  let unsorted = array.slice(1);
  while (unsorted.length > 0) {
    for (let i = 0; i < sorted.length; i++) {
      if (unsorted[0] < sorted[i - i]) {
        sorted.splice(0, 0, unsorted[0]);
        unsorted.splice(0, 1);
      } else if (unsorted[0] >= sorted[i - i]) {
        let count = 0;
        while (unsorted[0] > sorted[count]) {
          count += 1;
        }
        sorted.splice(count, 0, unsorted[0]);
        unsorted.splice(0, 1);
      }
    }
  }
  return sorted;
}
console.log(insertionSort([2, 5, 7, 3, 1, 0, 9, 14]));
