function buildPalindrome(st) {
  // Check if passed in string is a Palindrome
  function isPalindrome(string) {
    return string == string.split("").reverse().join("");
  }
  // If it is, simply return it
  if (isPalindrome(st)) return st;
  // Otherwise, iterate through the string, check if where we're at sliced is a palindrome.
  for (let i = 0; i < st.length; ++i) {
    if (isPalindrome(st.slice(i, st.length))) {
      // If it is, return the st with that slice added.
      return st + Array.from(st.slice(0, i)).reverse().join("");
    }
  }
}
// Log output
console.log(buildPalindrome("abcdc"));
