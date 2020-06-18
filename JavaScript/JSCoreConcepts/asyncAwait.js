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
  const response = await makeReq("Google");
  console.log("Response Received!");
  const processedRes = await processRequest(response);
  console.log(processedRes);
}

doStuff();
