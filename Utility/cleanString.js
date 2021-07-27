// Utility function that will remove all special chars from string and lowercase it.
function cleanString(str) {
  str = str.replace(/[^a-zA-Z]/g, "").toLowerCase();
  return str;
}
// Log output
console.log(cleanString("EyeYYSss!#$"));
