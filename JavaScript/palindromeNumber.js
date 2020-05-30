// Check if input integer is the same in reverse as it is on input

function isSymmetrical(num) {
  reverseNum = Number(num.toString().split("").reverse().join(""));

  if (num === reverseNum) {
    return true;
  } else {
    return false;
  }
}

console.log(isSymmetrical(7227));
