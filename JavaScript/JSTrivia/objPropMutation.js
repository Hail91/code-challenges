const a = { firstName: "Joe" };
// Line 3 points b to the same object in memory as a, therefore changes to a will reflect in b as well.
const b = a;
b.firstName = "Pete";
console.log(a);
// What gets logged??
console.log(typeof a);

// Line 4 should log an object equal to { firstName: "Pete" }.
