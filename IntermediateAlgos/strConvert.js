function convertHTML(str) {
  const htmlObj = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;",
  };
  return str
    .split("")
    .map((char) => htmlObj[char] || char)
    .join("");
}

convertHTML("Dolce & Gabbana");
