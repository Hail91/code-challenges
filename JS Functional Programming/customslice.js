function sliceArray(anim, beginSlice, endSlice) {
  let newSlice = [...anim];
  newSlice = newSlice.slice(beginSlice, endSlice);
  return newSlice;
}
var inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
sliceArray(inputAnim, 1, 3);
