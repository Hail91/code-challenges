function findEmailDomain(address) {
  address = address.split("@");
  return address[address.length - 1];
}
// Log output
console.log(findEmailDomain("test@email.com"));
