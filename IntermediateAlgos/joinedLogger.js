function joinedLogger(level, sep) {
  // write your code here
  // Need to return a function that will take a variable number of arguments(each arg would be an object)
  return function (...args) {
    // Could have a return array here that we'll push object values that satisfy the given conditions
    let stringArr = [];
    // Loop over each arg (obj), check it's key against level, if it's greater...push it's value to stringArr, otherwise continue.
    for (let i = 0; i < args.length; i++) {
      // Looking at first passed in Object
      if (args[i].level >= level) {
        stringArr.push(args[i].text);
      } else {
        continue;
      }
    }
    return stringArr.join(sep);
  };
}

msg1 = { level: 40, text: "foo" };
msg2 = { level: 90, text: "bar" };
msg3 = { level: 20, text: "baz" };
msg4 = { level: 21, text: "bax" };

const messages = [msg1, msg2, msg3, msg4];

let ans = joinedLogger(21, ";");
// console.log(ans())

console.log(ans(...messages));
