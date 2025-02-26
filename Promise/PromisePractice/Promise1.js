const PizzaOrder = new Promise((resolve, reject) => {
  setTimeout(() => {
    const isStock = true;
    if (isStock) {
      resolve("Pizza Delivered!");
    } else {
      reject("Pizza Out of Stock");
    }
  }, 2000);
});

PizzaOrder.then((message) => {
  console.log(message);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Pizza Eaten");
    });
  }, 1000);
}).then((message) => {
    console.log(message);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Feedback given");
      });
    }, 500);
  }).then((message) => {
    console.log(message);
  })
  .catch((e) => console.log(e));
