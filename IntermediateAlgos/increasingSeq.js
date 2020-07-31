// Determine whether removing only one element results in an array of only increasing positive integers.
function almostIncreasingSequence(sequence) {
  let newArr;
  let removed;

  for (let i = 0; i < sequence.length; i++) {
    removed = sequence.splice(i, 1);
    if (sequence.length === 1) {
      return true;
    }
    newArr = [...sequence];
    for (let j = 0; j < newArr.length; ) {
      while (newArr[j + 1] > newArr[j]) {
        j++;
        if (j === newArr.length - 1) {
          return true;
        }
      }
      sequence.splice(i, 0, removed[0]);
      break;
    }
  }
  return false;
}
