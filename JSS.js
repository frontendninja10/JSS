// Destructuring an Array of item prices
const prices = [500, 650, 700];
const [priceOne, priceTwo, priceThree] = prices;
console.log(priceOne); // 500

// Destructuring an Object of user bio
const user = {
  firstname: "Robo",
  lastName: "Cop",
  canFly: false,
};
const { firstname, canFly } = user;
console.log(firstname); // Robo
