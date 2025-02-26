const friendCalls = new Promise((resolve, reject) => {
  setTimeout(() => {
    const friendBusy = true;
    if (!friendBusy) {
      resolve("Hey! I've called you back.");
    } else {
      console.log(friendBusy);
      reject("Sorry, I'm busy right now.");
    }
  }, 5000);
})
  .then((message) => {
    console.log(message);
  })
  .catch((e) => console.log(e))
  .finally(() => {
    console.log("The promise has been settled, regardless of the result");
  });
