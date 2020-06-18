function makeReq(location) {
  return new Promise((resolve, reject) => {
    console.log(`Making Request to ${location}`);
    if (location === "Google") {
      resolve("Google says hi!");
    } else {
      reject("We can only talk to Google!");
    }
  });
}

function processRequest(response) {
  return new Promise((resolve, reject) => {
    console.log("Processing response");
    resolve(`Extra Information + ${response}`);
  });
}
