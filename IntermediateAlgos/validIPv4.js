function isIPv4Address(inputString) {
  // Split the inputString on '.'
  let AddrArray = inputString.split(".");
  // Array length must 4 if it's a valid IPv4, otherwise return false
  if (
    AddrArray.length < 4 ||
    AddrArray.length > 4 ||
    AddrArray[AddrArray.length - 1].length > 1
  ) {
    return false;
  }
  // Each value in AddrArray must be between 0 and 255.
  for (let i = 0; i < AddrArray.length; i++) {
    // Use Regex exp to check for non-integer values
    let isNum = /^\d+$/.test(AddrArray[i]);
    if (Number(AddrArray[i]) >= 0 && Number(AddrArray[i]) <= 255 && isNum) {
      continue;
    } else if (!isNum) {
      return false;
    } else {
      return false;
    }
  }
  return true;
}
console.log(isIPv4Address("172.162.254.1"));
