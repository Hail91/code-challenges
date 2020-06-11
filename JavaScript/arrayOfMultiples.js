// Return an array of multiples of num up to the given parameter "length".

function arrayOfMultiples(num, length) {
  let resultArr = [];
  let multiplier = 1;
  for (let i = 1; i <= length; i++) {
    resultArr.push(num * multiplier);
    multiplier += 1;
  }
  return resultArr;
}

console.log(arrayOfMultiples(12, 5));
