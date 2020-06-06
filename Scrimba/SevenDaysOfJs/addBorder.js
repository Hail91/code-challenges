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

// ** Cleaner solution, but I'm not a big fan of line 19 **

// function addBorder(array) {
//     //  write code here.
//     const wall = '*'.repeat(array[0].length + 2);

//     array.unshift(wall);
//     array.push(wall);

//     for(let i = 1; i < array.length - 1; i++) {
//         array[i] = '*'.concat(array[i], '*');
//     }

//     return array;
// }

console.log(addBorder(["abc", "ded"]));
