const myFunc = (str) => {
  if (str.length > 1) {
    return myFunc(str.slice(1));
  }

  return str;
};

console.log(myFunc("Hello world"));
// What gets logged?

// d will get logged, the function will run recursively until string.length === 1, every time we call str.slice(1), it removes the first
// char of input string, it will keep doing this until only 'd' remains in string, then base case will verify and it'll return.
