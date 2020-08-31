var minTimeToVisitAllPoints = function (points) {
  let seconds = 0;
  // Loop over 2D array and compare first point and next point
  for (let i = 1; i < points.length; i++) {
    let x = Math.abs(points[i - 1][0] - points[i][0]);
    let y = Math.abs(points[i - 1][1] - points[i][1]);
    seconds += Math.max(x, y);
  }
  return seconds;
};

console.log(
  minTimeToVisitAllPoints([
    [1, 1],
    [3, 4],
    [-1, 0],
  ])
);
