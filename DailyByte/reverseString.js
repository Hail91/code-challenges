// Reverse a string
function reverseString(string) {
  let strArray = string.split("");
  let temp;

  for (let i = 0, j = strArray.length - 1; i < j; i++, j--) {
    temp = strArray[i];
    strArray[i] = strArray[j];
    strArray[j] = temp;
  }
  return strArray.join("");
}

// Test cases
console.log(reverseString("cat"));
console.log(reverseString("cart"));
console.log(reverseString("Hello"));
