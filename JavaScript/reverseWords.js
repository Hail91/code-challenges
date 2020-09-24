var reverseWords = function (s) {
  let output = [];
  s = s.split(" ");
  s.forEach((str) => {
    let tempStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
      tempStr += str[i];
    }
    output.push(tempStr);
  });
  return output.join(" ");
};

console.log(reverseWords("Lets Code Togther"));
