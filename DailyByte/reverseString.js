// Reverse a string utilizing pointers
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

// Reverse using builtins
function reverseStringBuiltin(string) {
  return string.split("").reverse().join("");
}

// Add solution using recursion *to do*

// Test cases for solution #1
console.log(reverseString("cat"));
console.log(reverseString("cart"));
console.log(reverseString("Hello"));

// Test cases for solution #2
console.log(reverseStringBuiltin("cat"));
console.log(reverseStringBuiltin("cart"));
console.log(reverseStringBuiltin("Hello"));
