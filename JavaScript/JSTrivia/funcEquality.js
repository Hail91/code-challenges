const a = (c) => c;
const b = (c) => c;

console.log(a == b);
console.log(a(7) === b(7));

// What logs to the console on lines 4 & 5??
// Line 4 should log 'false' because despite being similar function, they are stored in different location in memory.
// Line 5 should log 'true' because both function return out their input which is the integer '7', and 7 === 7 will result in true.
