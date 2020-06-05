// Determine whether or not a string is a palindrome or not.
function isPalindrome(string) {
  // Convert string to lowercase to account for potential mixed casing
  string = string.toLowerCase();
  // Reverse the string (split first, then run reverse on the array of chars, then join back together)
  reversedString = string.split("").reverse().join("");
  // Compare the reversed string with the original input string for equality
  // If they are the same, return true. Otherwise return false
  if (reversedString === string) {
    return true;
  } else {
    return false;
  }
}

console.log(isPalindrome("Anna"));
