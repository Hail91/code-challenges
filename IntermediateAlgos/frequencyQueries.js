function frequencyQueries(queries) {
  const collection = [];
  const hashtable = {};

  for (let i = 0; i < queries.length; i++) {
    if (queries[i][0] === 1) {
      // Insert
      collection.push(queries[i][1]);
      if (!(queries[i][1] in hashtable)) {
        hashtable[queries[i][1]] = 1;
      } else {
        hashtable[queries[i][1]] += 1;
      }
    }
    if (queries[i][0] === 2) {
      if (queries[i][1] in hashtable) {
        hashtable[queries[i][1]] -= 1;
      } else {
        continue;
      }
    }
    if (queries[i][0] === 3) {
      if (Object.values(hashtable).includes(queries[i][1])) {
        collection.push(1);
      } else {
        HTMLAllCollection.push(0);
      }
    }
  }
  return collection;
}
console.log(
  frequencyQueries([
    [1, 3],
    [2, 3],
    [3, 2],
    [1, 4],
    [1, 5],
    [1, 5],
    [1, 4],
    [3, 2],
    [2, 4],
    [3, 2],
  ])
);
