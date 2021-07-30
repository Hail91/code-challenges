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
