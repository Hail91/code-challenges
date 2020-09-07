var destCity = function (paths) {
  let cities = paths.flat();
  let unique = new Set(cities);
  let final = Array.from(unique);
  for (let i = 0; i < paths.length; i++) {
    let curr = paths[i][0];
    final.splice(final.indexOf(curr), 1);
  }
  return final[0];
};

console.log(
  destCity([
    ["London", "New York"],
    ["New York", "Lima"],
    ["Lima", "Sao Paulo"],
  ])
);
