class Hangman {
  constructor(name) {
    this.name = name;
    this.array = this.name.split('');
    this.newArr = [];
    this.arrWrongLetters = [];
    this.mistakes = 0;
    
    for (let j = 0; j < this.array.length ; j++) {
      this.newArr.push('_');
    }
    
    this.guess = function(el) {
      if (this.newArr.join('') === this.array.join('')) {
        console.log("you win!");

        return;
      }
      
      if (this.mistakes >= 6) {
        console.log("game over, loser");
        return;
      }
      
      for (let i = 0; i < this.newArr.length ; i++) {
        if (el.toLowerCase() === this.array[i] || el.toUpperCase() === this.array[i]) {
          this.newArr[i] = this.array[i];
        }
      }
      
      if (this.newArr.indexOf(el.toLowerCase()) === -1 && this.newArr.indexOf(el.toUpperCase()) === -1) {
        this.mistakes++;
        
        if (this.arrWrongLetters.indexOf(el.toLowerCase()) === -1 && this.arrWrongLetters.indexOf(el.toUpperCase()) === -1) {
          this.arrWrongLetters.push(el);
        }
        
        console.log(`"wrong letter, errors left ${6 - this.mistakes} | ${this.arrWrongLetters.join(',')}"`);
      } else {
        console.log(`"${this.newArr.join('')}"`);
      }
      
      if (this.newArr.join('') === this.array.join('')) {
        console.log("you win!");
      }
      
      return;
    };
    
    this.getGuessedString = function() {
      return this.newArr.join('');
    };
    
    this.getErrorsLeft = function() {
      return 6 - this.mistakes;
    };
    
    this.getWrongSymbols = function() {
      return this.arrWrongLetters;
    };
    
    this.getStatus = function() {
      return `"${this.newArr.join('')} | errors left ${6 - this.mistakes}"`;
    };
    
    this.startAgain = function(key) {
      this.key = key;
      this.name = this.key;
      this.array = this.name.split('');
      this.newArr = [];
      this.arrWrongLetters = [];
      this.mistakes = 0;
      
      for (let j = 0; j < this.array.length ; j++) {
        this.newArr.push('_');
      }
    };
  }
}

const hangman = new Hangman('webpurple');
module.exports = hangman;
