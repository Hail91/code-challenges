import fs from "fs";
import path from "path";

const conversionMap = new Map([["integer", parseInt]]);

export const getInputString = (relPath) => {
  // read the input file
  const inputStr = fs.readFileSync("../day2/input.txt", "utf-8");
  return inputStr;
};

export const getInputArray = (str, separator = "\n", type = "string") => {
  // convert input string into array
  const inputArr = str.split(separator);

  return type === "string"
    ? inputArr
    : inputArr.map((input) => conversionMap.get(type)(input));
};
