function frequencyQueries(queries) {
  // Will need to define a collection Array first, which will populate after parsing Query instructions.
  let collection = [];
  let outputArr = [];
  let frequency = {};
  let collectionCount = 0;
  // Will need to loop over 2D queries array reading given directions.
  for (let i = 0; i < queries.length; i++) {
    // Read each query and modify collection as needed.
    if (queries[i][0] === 1) {
      collection.push(queries[i][1]);
      if (collection[collectionCount] in frequency) {
        frequency[collection[collectionCount]] =
          frequency[collection[collectionCount]] + 1;
        collectionCount += 1;
      } else {
        frequency[collection[collectionCount]] = 1;
        collectionCount += 1;
      }
    } else if (queries[i][0] === 2) {
      if (collection.includes(queries[i][1])) {
        collection.splice(collection.indexOf(queries[i][1]), 1);
      } else {
        continue;
      }
    } else if (queries[i][0] === 3) {
      let vals = Object.values(frequency);
      // If vals contains queries[i][1], then append 1 to output, otherwise append 0.
      if (vals.includes(queries[i][1])) {
        outputArr.push(1);
      } else if (!vals.includes(queries[i][1])) {
        outputArr.push(0);
      }
    }
    console.log(outputArr);
  }
}
