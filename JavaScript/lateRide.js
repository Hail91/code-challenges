function lateRide(n) {
  // Calulate number of hours
  let hours = Math.floor(n / 60);
  // Convert to string and split into array, then reduce down to single value
  hours = hours
    .toString()
    .split("")
    .reduce((a, b) => Number(a) + Number(b));
  // Calculate number of minutes
  let minutes = n % 60;
  // Repeat line 4 here for minutes
  minutes = minutes
    .toString()
    .split("")
    .reduce((a, b) => Number(a) + Number(b));
  // Return sum
  return Number(hours) + Number(minutes);
}

console.log(lateRide(808));
