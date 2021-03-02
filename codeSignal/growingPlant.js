function growingPlant(upSpeed, downSpeed, desiredHeight) {
  let currentHeight = 0;
  let days = 0;
  while (currentHeight < desiredHeight) {
    currentHeight += upSpeed;
    days += 1;
    if (currentHeight >= desiredHeight) return days;
    else currentHeight -= downSpeed;
  }
  return days;
}
// Log output
console.log(growingPlant(10, 9, 4));
