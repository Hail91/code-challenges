function order(words) {
  if (!words.length) return "";
  // otherwise...
  let output = [],
    positions = words.replace(/[^\d]/g, "").split("");
  // Split words into array
  words = words.split(" ").forEach((el, idx) => {
    output[positions[idx] - 1] = el;
  });
  return output.join(" ");
}
// Log output
console.log(order("is2 Thi1s T4est 3a"));
