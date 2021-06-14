// Utility function that will remove all special chars from string and lowercase it.
function cleanString(str) {
  str = str.replace(/[^a-zA-Z]/g, "").toLowerCase();
  return str;
}
console.log(cleanString("EyeYYSss!#$"));
