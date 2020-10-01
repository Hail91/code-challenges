function getdays(date1, date2) {
  // Get day of week from first
  let date = new Date(date1);
  let localDate = date.toLocaleDateString();
  let dateArr = [];
  let start = date1.substr(3, 1);
  let end = date2.substr(3, 1);
  for (let d = start; d < end; d++) {
    localDate = localDate.replace(localDate.charAt(3), d);
    console.log(localDate);
    if (d === start) {
      dateArr.push(date.getDay());
    } else dateArr.push(date.getDay(localDate));
  }
  console.log(dateArr);
}

console.log(getdays("10-1-2020", "10-8-2020"));
