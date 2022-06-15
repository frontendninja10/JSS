let user = {
  name: "John",
  surname: "Smith",
  get fullName() {
    return `${this.name} ${this.surname}`;
  },
  set fullName(value) {
    [this.name, this.surname] = value.split(" ");
  },
};

const ninjaAcademy = {
  maleNinjas: ["Kositu", "Hamura"],
  femaleNinjas: ["Uto", "Ikoji"],

  get ninjas() {
    return `${this.maleNinjas[0]} vs ${this.femaleNinjas[0]}`;
  },

  set ninjas(ninjaPair) {
    [maleNinja, femaleNinja] = ninjaPair.split(" ");
    this.maleNinjas.push(maleNinja);
    this.femaleNinjas.push(femaleNinja);
  },
};

const prices = {
  priceInDollars: 500,

  get priceInNaira() {
    return `${this.priceInDollars * 400}`;
  },

  set priceInNaira(naira) {
    this.priceInDollars = naira / 400;
  },
};

prices.priceInNaira = 500;
console.log(prices);
