function makeReq(location) {
  // Return a new Promise
  return new Promise((resolve, reject) => {
    // Log to let us know we've started processing
    console.log(`Making Request to ${location}`);
    // If location is Google, resolve the promise logging "Google says hi!"
    if (location === "Google") {
      resolve("Google says hi!");
      // Otherwise, reject logging "We can only talk to Google!"
    } else {
      reject("We can only talk to Google!");
    }
  });
}

function processRequest(response) {
  // Return a promise
  return new Promise((resolve, reject) => {
    // Log the start
    console.log("Processing response");
    // Return the logged response on successful resolve
    resolve(`Extra Information + ${response}`);
  });
}

// Utilize Make Request/Process request functions
// makeReq("Google")
//   .then((res) => {
//     console.log("Request received!");
//     // Want to return the process request function now..
//     // And pass it the response from the makeReq Function
//     return processRequest(res);
//   }) // Need second then statement since makeReq returns a promise
//   .then((resAfterProcess) => {
//     // Log the response after processing
//     console.log(resAfterProcess);
//   }) // Catch if the nested promise rejects
//   .catch((error) => {
//     console.log(error);
//   });

// Async/Await implementation
async function doStuff() {
  // Wait for the first promise to resolve/reject and assign result
  const response = await makeReq("Google");
  // Log in between promises
  console.log("Response Received!");
  // Process the second promise
  const processedRes = await processRequest(response);
  // Log the result of the second promise
  console.log(processedRes);
}
// Stuff here
doStuff();
