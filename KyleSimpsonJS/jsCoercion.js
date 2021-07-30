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
