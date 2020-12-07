// Example
// -----------------------------------------------------------------
/* light red bags contain 1 bright white bag, 2 muted yellow bags.
dark orange bags contain 3 bright white bags, 4 muted yellow bags.
bright white bags contain 1 shiny gold bag.
muted yellow bags contain 2 shiny gold bags, 9 faded blue bags.
shiny gold bags contain 1 dark olive bag, 2 vibrant plum bags.
dark olive bags contain 3 faded blue bags, 4 dotted black bags.
vibrant plum bags contain 5 faded blue bags, 6 dotted black bags.
faded blue bags contain no other bags.
dotted black bags contain no other bags. */
// ------------------------------------------------------------------

// STEPS...
// Populate hashtable with bag type and the bags it contains as the values (value can be array of bags with quantity [q, type])

const fs = require("fs");
let bagHashMap = {};
try {
  const data = fs.readFileSync("./inputs/Puzzle8Input.txt", "utf-8");
  const lines = data.split(/\r?\n/);
  for (let i = 0; i < lines.length; i++) {
    let bagData = lines[i].split("contain").map((item) => item.trim());
    if (bagData[0] in bagHashMap) {
      continue;
    } else
      bagHashMap[bagData[0]] = bagData[1]
        .trim()
        .split(",")
        .map((char) => char.replace(/\d*[.]?\d*/g, ""))
        .map((item) => item.trim());
  }
} catch (error) {
  console.log(error, "Error reading from file!");
}

// console.log(bagHashMap);

const validBags = (hashMap, bagType, numberOfBags) => {
  // Loop over BagHashMap
  if (bagType in hashMap) {
    if (hashMap[bagType].includes("no other bags")) {
      return numberOfBags;
    } else if (hashMap[bagType].includes("shiny gold bags")) {
      // If values array includes 'shiny gold bag(s)', increment counter by 1.
      numberOfBags += 1;
    } else {
      for (let i = 0; i < hashMap[bagType].length; i++) {
        validBags(hashMap, hashMap[bagType][i], numberOfBags);
      }
    }
  }
};

console.log(validBags(bagHashMap, Object.keys(bagHashMap)[0], 0));
