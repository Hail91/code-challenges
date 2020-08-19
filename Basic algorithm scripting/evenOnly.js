function evenDigitsOnly(n) {
  n = n
    .toString()
    .split("")
    .map((el) => (el % 2 === 0 ? true : false));
  return n.every((el) => el === true);
}

console.log(evenDigitsOnly(1364564));
