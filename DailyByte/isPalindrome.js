// Given a string, return whether or not it's a palindrome, ignoring case and non-alphabetic characters
function isPalindrome(string) {
  string = normalizeString(string);
  return string === string.split("").reverse().join("");
}

function normalizeString(string) {
  let exp = new RegExp(/[^a-z]/gi);
  let cleanedString = string.replace(exp, "").toLowerCase();

  return cleanedString;
}
console.log(isPalindrome("level"));
console.log(isPalindrome("algorithm"));
console.log(isPalindrome("A man, a plan, a canal: Panama."));
