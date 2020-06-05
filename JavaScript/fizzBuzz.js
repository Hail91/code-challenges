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

// Helper function for switch implementation
function multiple(num, modulo) {
  return num % modulo === 0;
}
// Even this implementation can be improved by adding a helper function instead of hardcoding values in like 3, 5, or 3 && 5.
function fizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    let result = "";
    switch (true) {
      case multiple(i, 15):
        result += "FizzBuzz";
        break;
      case multiple(i, 3):
        result += "Fizz";
        break;
      case multiple(i, 5):
        result += "Buzz";
        break;
      default:
        result = i;
        break;
    }
    console.log(result);
  }
}

console.log(fizzBuzz());
