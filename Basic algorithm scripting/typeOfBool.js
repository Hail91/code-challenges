function booWho(bool) {
  // Check type in guard clause
  if (typeof bool !== "boolean") return false;
  // Return true if not a boolean
  return true;
}
// Log output
console.log(booWho(1));
