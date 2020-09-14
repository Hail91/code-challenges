var judgeCircle = function (moves) {
  let position = [0, 0];
  // Loop over moves string
  for (let i = 0; i < moves.length; i++) {
    switch (moves[i]) {
      case "U":
        position[0] += 1;
        break;
      case "D":
        position[0] -= 1;
        break;
      case "R":
        position[1] += 1;
        break;
      case "L":
        position[1] -= 1;
        break;
      default:
        break;
    }
  }
  if (position.every((el) => el === 0)) return true;
  else return false;
};

console.log(judgeCircle("UUDDLLRR"));
