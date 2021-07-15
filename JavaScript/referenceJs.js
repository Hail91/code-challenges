// Example to illustrate the JavaScript is not actually a true "Pass by reference language"
function swap(a, b) {
  const temp = a;
  a = b;
  b = temp;

  console.log(a); // 2
  console.log(b); // 4
}

let x = 4;
let y = 2;
swap(x, y);

console.log(x); // 4
console.log(y); // 2

/* References are really just another way of saying 'Aliases', a good example is in a language like C++ where assigning a string
for example to a new variable is just created an ALIAS for the original value, both variables reference the same memory address.
Therefore, updating the alias variable will also update the original. */
