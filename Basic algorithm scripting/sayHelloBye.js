function sayHelloBye(name, num) {
  // Update Name Formatting
  name = name.charAt(0).toUpperCase() + name.substring(1);
  // Return Hello `name` if num == 1, else return Bye.
  if (num === 1) return `Hello ${name}`;
  else return `Bye ${name}`;
}
// Log output
console.log(sayHelloBye("John", 1));
