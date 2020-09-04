var maximum69Number = function (num) {
  // Conver to string, split into array
  num = num.toString().split("");
  // Start with first value, if it's a 6, flip it and return
  for (let i = 0; i < num.length; i++) {
    if (num[i] === "6") {
      num[i] = "9";
      return parseInt(num.join(""), 10);
    }
  }
  return parseInt(num.join(""), 10);
};

console.log(maximum69Number(9999));
