function myReplace(str, before, after) {
  if (before[0] === before[0].toUpperCase()) {
    after = after.charAt(0).toUpperCase() + after.slice(1);
  } else {
    after = after.charAt(0).toLowerCase() + after.slice(1);
  }
  let newStr = str.replace(before, after);
  return newStr;
}

myReplace("He is Sleeping on the couch", "Sleeping", "sitting");
