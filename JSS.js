// let user = {
//   name: "John",
//   surname: "Smith",
//   get fullName() {
//     return `${this.name} ${this.surname}`;
//   },
//   set fullName(value) {
//     [this.name, this.surname] = value.split(" ");
//   },
// };

// const ninjaAcademy = {
//   maleNinjas: ["Kositu", "Hamura"],
//   femaleNinjas: ["Uto", "Ikoji"],

//   get ninjas() {
//     return `${this.maleNinjas[0]} vs ${this.femaleNinjas[0]}`;
//   },

//   set ninjas(ninjaPair) {
//     [maleNinja, femaleNinja] = ninjaPair.split(" ");
//     this.maleNinjas.push(maleNinja);
//     this.femaleNinjas.push(femaleNinja);
//   },
// };

// const prices = {
//   priceInDollars: 500,

//   get priceInNaira() {
//     return `${this.priceInDollars * 400}`;
//   },

//   set priceInNaira(naira) {
//     this.priceInDollars = naira / 400;
//   },
// };

// prices.priceInNaira = 500;
// console.log(prices);

const calculateSectionScores = (sectionA, sectionB, sectionC) => {
  const ratio = {
    a: 0.833,
    b: 0.569,
    c: 0.614,
  };

  let aScore, bScore, cScore;
  aScore = sectionA * ratio.a;
  bScore = sectionB * ratio.b;
  cScore = sectionC * ratio.c;

  return `A: ${aScore}, B: ${bScore}, C: ${cScore}`;
};

console.log(calculateSectionScores(15, 37, 25.5));
