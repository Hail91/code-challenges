function makeArrayConsecutive2(statues) {
  let additionalStatues = [];
  for (let i = Math.min(...statues); i < Math.max(...statues); ++i) {
    if (!statues.includes(i)) {
      additionalStatues.push(i);
    } else continue;
  }
  return additionalStatues.length;
}
// Log output
console.log(makeArrayConsecutive2([2, 3, 5, 6, 8]));
