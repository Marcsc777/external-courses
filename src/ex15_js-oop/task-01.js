class Candies {
  constructor(name, grams) {
    this.name = name;
    this.grams = grams;
  }
}
class Lollipops extends Candies{

}
const twix = new Candies(`Twix`, 55);
const mars = new Candies(`Mars`, 70);
const kitKat = new Candies(`KitKat`, 35);
const picnic = new Candies(`Picnic`, 80);
const barberry = new Lollipops(`Barberry`, 20);
class Gift {
  constructor(gift) {
    this.gift = gift;
  }
  determineWeight() {
    let summ = this.gift.reduce(function(previousValue, currentValue) {
      return previousValue + currentValue.grams;
    }, 0);
    
    return `Общий вес подарка, гр.: ${summ}`;
  }
  sortSimple() {
    let sortGrams = this.gift.map(function(num, index) {
      if (num.grams < 40) {
        return num.name;
      }
    });
    
    sortGrams = sortGrams.filter(function(x) {
      return x !== undefined && x !== null;
    });
    
    return `Сладости, вес которых менее 40г весом: ${sortGrams}`;
  }
  hasCandy (nameCandies) {
    return this.gift.some(function(value) {
      return value.name === nameCandies;
    });
  }
}
let gift = new Gift([twix, mars, mars, kitKat, picnic, barberry]);
console.log(gift);
console.log(gift.determineWeight());
console.log(gift.sortSimple());
console.log(gift.hasCandy(`Mars`));
