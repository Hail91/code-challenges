function convertToRoman(num) {
  const romanObj = {
    1: "I",
    4: "IV",
    5: "V",
    9: "IX",
    10: "X",
    40: "XL",
    50: "L",
    90: "XC",
    100: "C",
    400: "CD",
    500: "D",
    900: "CM",
    1000: "M",
  };
  let startingNum = num;
  // Need to have some kind of string to return out of function
  let romanStr = "";
  // Rules...
  // Cannot have more than 3 of same Roman numerals in a sequence.
  // After you've inserted 3, you must use a special form of subtraction to get the values you need.
  // when a smaller number appears in front of a larger one, that needs to be subtracted.
  // Ex.) 9 is IX (X = 10, I = 1) ----> 10 - 1 = 9

  // Steps....
  // 1.) Check for largest number you can insert from romanObj without going over the input num
  // 2.) Subtract it from startingNum,
  // 3.) Continue until you can represent the input num via Roman Numeral.
  // ** CONSTRAINT ** <---- Cannot have > 3 consective of same Roman Numeral.
  // Example....4 cannot be IIII, instead you must insert 5 and 1 because 5 - 1 = 4 (1/I must come before V/5)
  let keys = Object.keys(romanObj);
  keys.sort((a, b) => b - a);

  // Loop over keys
  for (let k = 0; k < keys.length; k++) {
    while (Number(keys[k]) <= startingNum) {
      // Need to check if string will require more than 3 instances of a Numeral
      // If so, need to rebuild string using special subtraction.
      startingNum -= keys[k];
      romanStr += romanObj[keys[k]];
    }
  }
  return romanStr;
}

console.log(convertToRoman(36));
