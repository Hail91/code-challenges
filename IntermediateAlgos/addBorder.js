function addBorder(picture) {
  let border = "*".repeat(picture[0].length + 2);
  // Add border to front and back of picture
  picture.unshift(border);
  picture.push(border);
  // Loop over picture, ignoring first and last elements
  for (let i = 1; i < picture.length - 1; i++) {
    // Modify inside of picture adding borders to each element
    picture[i] = "*" + picture[i] + "*";
  }
  return picture;
}

console.log(addBorder(["ded", "led"]));
