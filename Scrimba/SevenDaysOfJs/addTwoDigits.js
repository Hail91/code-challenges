function addTwoDigits(num) {
  // We know that the input will always been two digits
  // We should be able to loop over the number, getting each digit, adding them, then storing them in a result variable which we'll return out

  // 1.) Initialize variable to hold the result (We must also convert num to a string to loop over it)
  num = num.toString();
  let result = "";
  let ans = 0;
  // 2.) Write loop to extract each digit out
  for (let i = 0; i < num.length; i++) {
    // Add each digit of input num to string
    result += num[i];
  }
  // Split the string and store in array
  let newStr = result.split("");
  // Loop over array of both characters
  for (let x = 0; x < newStr.length; x++) {
    // Convert to number and add to answer variable
    ans += Number(newStr[x]);
  }
  // Return answer
  return ans;
  // 3.) Add together and return
}

console.log(addTwoDigits(29));
