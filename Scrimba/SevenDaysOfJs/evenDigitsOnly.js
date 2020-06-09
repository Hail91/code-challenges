// Write a function that takes an integer and returns true if it contains only even digits, otherwise return false
// ** Assume we will only be checking digits 0-9 **
function evenDigitsOnly(number) {
  // Turn input number into a string
  number = number.toString();
  // Split the string and store in an array
  let arr = number.split("");
  // Loop over Array converting each "string" character to a number
  for (let i = 0; i < arr.length; i++) {
    arr[i] = Number(arr[i]);
  }
  let result = arr.every((el) => {
    return el % 2 === 0;
  });
  return result;
}

console.log(evenDigitsOnly(2422682));
