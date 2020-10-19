function bomb(str) {
  str = str.replace(/[^a-zA-Z\s]/g, "").toLowerCase();
  let strArray = str.split(" ");
  return strArray.includes("bomb") ? "Duck!!!" : "There is no bomb, relax.";
}
console.log(bomb("There is a bomb."));
