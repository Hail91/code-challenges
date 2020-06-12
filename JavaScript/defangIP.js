// Remove '.' from Input IP address and replace it with [.]

const defangIPaddr = function (address) {
  return address.split(".").join("[.]");
};

console.log(defangIPaddr("1.1.3.5"));
