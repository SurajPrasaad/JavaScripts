let numberOfGuest = 10;
// small - <= 2
// medium - <= 4
// large
let pizza;
if (numberOfGuest <= 2) {
  pizza = "small";
} else if (numberOfGuest <= 4) {
  pizza = "medium";
} else {
  pizza = "large";
}

console.log(
  `Bhai Customers ki janshnaya ${numberOfGuest} hai! , so pizza inko ${pizza} chaiye😂`
);
