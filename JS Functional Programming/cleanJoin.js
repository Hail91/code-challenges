function sentensify(str) {
  str = str.split(/\W/);
  let newStr = str.join(" ");
  console.log(newStr);
  return newStr;
}
sentensify("May-the-force-be-with-you");
