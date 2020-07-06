function truthCheck(collection, pre) {
  // Loop over collection array getting the keys for each object, check the keys against pre, if they match...
  for (let i = 0; i < collection.length; i++) {
    // Get keys for each object
    let objKeys = Object.keys(collection[i]);
    // Then check if value of that key in object is truthy, if both of these conditions are true, return true.
    if (objKeys.includes(pre)) {
      if (collection[i][pre]) {
        continue;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
  return true;
}

console.log(
  truthCheck(
    [
      { user: "Tinky-Winky", sex: "male" },
      { user: "Dipsy", sex: "male" },
      { user: "Laa-Laa", sex: "female" },
      { user: "Po", sex: "female" },
    ],
    "sex"
  )
);
