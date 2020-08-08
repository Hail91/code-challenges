function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {
  let myStrength = [yourLeft, yourRight].sort((a, b) => a - b);
  let theirStrength = [friendsLeft, friendsRight].sort((a, b) => a - b);

  if (JSON.stringify(myStrength) === JSON.stringify(theirStrength)) {
    return true;
  } else {
    return false;
  }
}
