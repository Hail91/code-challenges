/**
* @param {string} s
* @return {string}
*/
const sortString = function(s) {
  s = s.split('').map((char, i) => {
      return s.charCodeAt(i)
  })
  let output = []
  let sorted = false;
  let direction = 'F';
  while(s.length > 0) {
      if(direction === 'F') {
          let currCharCode = Math.min(...s)
          output.push(String.fromCharCode(currCharCode))
          s.splice(s.indexOf(currCharCode), 1)
          if(sorted == false) {
            s = s.sort((a, b) => a - b) 
          }
          sorted = true;
          for(let i = 0; i < s.length; i++) {
              if(s[i] <= currCharCode) continue;
              else if(s[i] > currCharCode) {
                  output.push(String.fromCharCode(s[i]))
                  currCharCode = s[i]
                  s.splice(s.indexOf(s[i]), 1)
                  i -= 1
              }
          }
          if(s.length > 0) {
            direction = 'B';
          }
      }
      if(direction === 'B') {
          let currCharCode = Math.max(...s)
          output.push(String.fromCharCode(currCharCode))
          s.splice(s.indexOf(currCharCode), 1)
          for(let i = s.length - 1; i > 0 ; i--) {
              if(s[i] >= currCharCode) continue;
              else if(s[i] < currCharCode) {
                  output.push(String.fromCharCode(s[i]))
                  currCharCode = s[i]
                  s.splice(s.indexOf(s[i]), 1)
              }
          } 
      }
      if(s.length > 0) direction = 'F';
    }
    return output.join("")
  };

console.log(sortString("leetcode"));
