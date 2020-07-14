// Convert standard 12 hour time to 24H format.

function timeConversion(s) {
  let PM = s.match("PM") ? true : false;
  // Split time string on : into an indexed array.
  s = s.split(":");
  // Minute will stay the same, so track it here.
  let minutes = s[1];
  let hours;
  let seconds;
  // If PM is true, we need to do conversion for that
  if (PM) {
    if (s[0] !== "12") {
      // Convert hours into 12 hour format. (ParseInt will target first element of
      // newly created s array, then we use base 10 radix)
      hours = 12 + parseInt(s[0], 10);
      // Seconds stays the same, but we must remove the PM from the end using replace.
      seconds = s[2].replace("PM", "");
    } else {
      return s[0] + ":" + s[1] + ":" + s[2].replace("PM", "");
    }
  }
  // Otherwise, do the AM conversion.
  else {
    if (s[0] === "12") {
      hours = s[0].replace("12", "00");
      seconds = s[2].replace("AM", "");
    } else {
      hours = s[0];
      seconds = s[2].replace("AM", "");
    }
  }
  let newFormat = hours + ":" + minutes + ":" + seconds;
  return newFormat;
}

console.log(timeConversion("07:35:05PM"));
