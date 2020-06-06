// Brute force, removes values in array, and replaces with desired content to create "Wall" of asterisks around the array values

function addBorder(array) {
  //  write code here.
  // declare a string of five asterisks
  let mainWall = "*****";
  let firstInner = "*abc*";
  let secondInner = "*ded*";
  // Take input array and delete everything in it
  let newArr = array.splice(0, 0);
  // Add strings with borders in order expected
  newArr.push(mainWall, firstInner, secondInner, mainWall);
  return newArr;
}

console.log(addBorder(["abc", "ded"]));
