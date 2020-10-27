function sayHelloBye(name, num) {
  name = name.charAt(0).toUpperCase() + name.substring(1);
  if (num === 1) return `Hello ${name}`;
  else return `Bye ${name}`;
}

console.log(sayHelloBye("John", 1));
