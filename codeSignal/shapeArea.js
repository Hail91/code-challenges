function shapeArea(n) {
  let area = 1;
  let sides = 4;
  while (n > 1) {
    area += (n - 1) * sides;
    n -= 1;
  }
  return area;
}
// Log output
console.log(shapeArea(3));
