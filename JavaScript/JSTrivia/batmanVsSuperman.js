const superheroMaker = (a) => {
  return a instanceof Function ? a() : a;
};

console.log(superheroMaker(() => "Batman")); // Is instance of function, should log 'Batman'
console.log(superheroMaker("Superman")); // Is not instance of function, should log 'Superman'.

// ^ What gets logged?
