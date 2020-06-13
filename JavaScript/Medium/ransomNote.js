function checkMagazine(magazine, note) {
  //Initialize a dictionary to hold all words from magazine and number of instances
  let magazineDict = {};
  // let magArr = magazine.split(' ')
  // let noteArr = note.split(' ')
  let wordCount = 1;
  // let result = []
  let count = 0;
  // Loop over Magazine string and insert values/instances in hashmap
  for (let i = 0; i < magazine.length; i++) {
    if (magazine[i] in magazineDict) {
      magazineDict[magazine[i]] = wordCount + 1;
    } else {
      magazineDict[magazine[i]] = wordCount;
    }
  }

  for (let x = 0; x < note.length; x++) {
    if (magazineDict.hasOwnProperty(note[x]) && magazineDict[note[x]] !== 0) {
      count += 1;
      magazineDict[note[x]] = magazineDict[note[x]] - 1;
    }
  }
  if (count === note.length) {
    console.log("Yes");
  } else {
    console.log("No");
  }
}
