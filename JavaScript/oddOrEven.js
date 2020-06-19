// Write a function to determine if sum of all integers in the input num is even or odd.
function oddishOrEvenish(num) {
  // need to convert the number to a string and split it
  num = num.toString();
  let numArr = num.split("");
  for (let i = 0; i < numArr.length; i++) {
    numArr[i] = Number(numArr[i]);
  }
  // sum values of the newly created array
  let res = numArr.reduce((a, b) => a + b);
  // if those values are even, return 'evenish', else return 'oddish'
  if (res % 2 === 0) {
    return "Evenish";
  } else {
    return "Oddish";
  }
}

console.log(oddishOrEvenish(694));
