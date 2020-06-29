const arr = [1, 2, 3];

const a = arr.reduce((acc, el, i) => ({ ...acc, [el]: i }), {});

const b = {};
for (let i = 0; i < arr.length; i++) {
  b[arr[i]] = i;
}

// Question: Which is more efficient for creating an object?

// Answer: b is more efficient because it simply iterates through the array create keys for each array value. a is less efficient
// because the spread (...) operator creates a shallow copy of arr on every iteration from the reduce method. Creating a shallow copy
// is a fairly expensive operation compared to b's implementation.
