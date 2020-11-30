class Candies {
  constructor(name, grams) {
    this.name = name;
    this.grams = grams;
  }
}

class Lollipops {
  constructor(name, grams) {
    this.name = name;
    this.grams = grams;
  }
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
    let summ = 0;
    
    for (let i = 0; i < this.gift.length; i++) {
      summ += this.gift[i].grams;
    }
    
    return `Общий вес подарка: ${summ}`;
  }
  
  sortSimple() {
    this.Arr = [];
    
    for (let i = 0; i < this.gift.length; i++) {
      if (this.gift[i].grams < 40) {
        this.Arr.push(this.gift[i].name);
      }
    }
    
    return `Сладости, вес которых менее 40г весом: ${this.Arr}`;
  }
  
  hasCandy (nameCandies) {
    return this.gift.filter(function(value) {
      return value.name === nameCandies;
    });
  }
}

let gift = new Gift([twix, mars, mars, kitKat, picnic, barberry]);

console.log(gift);
console.log(gift.determineWeight());
console.log(gift.sortSimple());
console.log(gift.hasCandy(`Mars`));
