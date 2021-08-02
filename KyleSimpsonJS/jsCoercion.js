// Some examples of implicit type coercion in JavaScript for reference

/* Numbers */
let exampleOne = "2" - 2;
// Log output
console.log(exampleOne, "Subract number from a string");
/* 
    The above example returns 0, the type of coercion performed in the example is determined by the action taken (in this case, subtraction is being performed on a string).
    There is no situation where you can subtract from a string, so JS internally 'coerces' the string to a number by calling toPrimitive --> toNumber. In the end this ends up 
    being 2 - 2 which results in the number zero being returned.
*/

// More math operations against a string value type

// Multiplication
let exampleTwo = "2" * 2;
console.log(exampleTwo, "Multiple string by a number");
// Division
let exampleThree = "2" / 2;
console.log(exampleThree, "Divide string by a number");
/*
    The above examples behave similarly to exampleOne, exampleTwo will return 4 with exampleThree returning 1. The reason for this is that both multiplication and division are mathematical operations,
    when JS sees them, it coerces the left hand string value to a number before execution. Again, it will call toPrimitive on the string, and then toNumber before doing the math.
*/

// The above examples return the same output when doing these operations with JUST strings...examples below...
let exampleOneStrings = "2" - "2";
let exampleTwoStrings = "2" * "2";
let exampleThreeStrings = "2" / "2";
// Log output
console.log(
  exampleOneStrings,
  exampleTwoStrings,
  exampleThreeStrings,
  "Examples executing Math operations on JUST strings"
);

/* CAVEAT is when using the addition operation (+), examples below... */
let examplewithAdditionOperator = "2" + 2;
let examplewithAdditionOperatorTwo = "2" + "2";
let examplewithAdditionOperatorThree = 2 + "2";
// Log output
console.log(
  examplewithAdditionOperator,
  examplewithAdditionOperatorTwo,
  examplewithAdditionOperatorThree,
  "Adding strings and numbers"
);

/* 
    The above example differs in that we're using the addition operator, strings in JavaScript DO have a default behavior with regard to the '+' operator...and that is concatenation. Internally, when
    JavaScript encounters '+' when dealing with either strings or a combination of strings and numbers...it will call toPrimitive on the number and then call valueOf internally. This will almost always
    result in the result of a string concat after the number is coerced to a string, all 3 calls above should return the string '22'.
*/

// CHALLENGES
function isValidName(name) {
  // If the name argument is a string and it contains no whitespace with a length >= 3...return true
  if (typeof name == "string" && name.trim().length >= 3) {
    return true;
  }
  // Otherwise return false
  return false;
}
function hoursAttended(attended, length) {
  // If typeof attended is a string and it exists
  if (typeof attended == "string" && attended.trim() !== "") {
    // Explicity coerce to a number
    attended = Number(attended);
  }
  // If typeof length is a string and it exists
  if (typeof length == "string" && length.trim() !== "") {
    // Explicity coerce to a Number
    length = Number(length);
  }
  // If both arguments are numbers and they both have a length greater than or equal to zero with attended being < length...
  if (
    typeof attended == "number" &&
    typeof length == "number" &&
    attended >= 0 &&
    length >= 0 &&
    Number.isInteger(attended) &&
    Number.isInteger(length) &&
    attended <= length
  ) {
    // Return true
    return true;
  }
  // Else return false
  return false;
}
// End
