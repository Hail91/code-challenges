// ** THIS ONE IS TRICKY **
const length = 4;
const numbers = [];
for (var i = 0; i < length; i++); // ; <--- This results in a null statement
// The for loop runs 4 times with nothing in it, then it hits line 6 and pushes i (Which is now 4) + 1 into numbers...we get [5].
{
  numbers.push(i + 1);
}

console.log(numbers); // => [5]
