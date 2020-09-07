var busyStudent = function (startTime, endTime, queryTime) {
  let num = 0;
  for (let i = 0; i < startTime.length; i++) {
    if (queryTime >= startTime[i] && queryTime <= endTime[i]) {
      num += 1;
    }
  }
  return num;
};

console.log(busyStudent([1, 2, 3], [3, 2, 7], 4));
