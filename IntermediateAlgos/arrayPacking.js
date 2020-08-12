function arrayPacking(a) {
  let packed = [];
  for (let i = 0; i < a.length; i++) {
    a[i] = a[i].toString(2);
    if (a[i].length < 8) {
      let diff = 8 - a[i].length;
      let newStr = "0".repeat(diff);
      newStr += a[i];
      packed.unshift(newStr);
    } else {
      packed.unshift(a[i]);
    }
  }
  packed = packed.join("");
  return parseInt(packed, 2);
}

console.log(arrayPacking([24, 85, 0]));
