// Write a program that prints the numbers from 1 to 100.
// But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”.
// For numbers which are multiples of both three and five print “FizzBuzz”.

// function fizzBuzz() {
//   // Loop from 1 to 100
//   for (let i = 1; i <= 100; i++) {
//     // If the number is divisible by 3 AND 5 print 'FizzBuzz'
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log("FizzBuzz");
//       // If the number is divisible by 3 print "Fizz"
//     } else if (i % 3 === 0) {
//       console.log("Fizz");
//       // If the number is divisible by 5 print 'Buzz'
//     } else if (i % 5 === 0) {
//       console.log("Buzz");
//     } else {
//       console.log(i);
//     }
//   }
// }

function fizzBuzz() {
  let result = "";

  for (let i = 1; i <= 100; i++) {
    switch (true) {
      case i % 3 === 0 && i % 5 === 0:
        result += "FizzBuzz";
      case i % 3 === 0:
        result += "Fizz";
      case i % 5 === 0:
        result += "Buzz";
    }
  }
  console.log(i, result);
}

console.log(fizzBuzz());
