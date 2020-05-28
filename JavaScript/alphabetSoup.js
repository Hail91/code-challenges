// Rearrange input string and return it's chars in alphabetical order

function AlphabetSoup(str) {
  str_arr = str.split("");
  str_arr.sort();
  new_str = str_arr.join("");
  return new_str;
}

console.log(AlphabetSoup("hello"));
