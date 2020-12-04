class Hangman {
  constructor(name) {
    this.name = name;
    this.array = this.name.split('').map(function(num) {
      return '_';
    });
    this.arrWrongLetters = [];
    this.mistakes = 0;
    this.guess = function(el) {
      if (this.array.join('') === this.name) {
        console.log("you win!");
        
        return;
      }
      
      if (this.mistakes >= 6) {
        console.log("game over, loser");
        
        return;
      }
      
      this.name.split('').map(function(num, index) {
        if (el.toLowerCase() === num || el.toUpperCase() === num) {
          this.array[index] = el;
        }
      }.bind(this));
      
      if (this.array.indexOf(el.toLowerCase()) === -1 && this.array.indexOf(el.toUpperCase()) === -1) {
        this.mistakes++;
        
        if (this.arrWrongLetters.indexOf(el.toLowerCase()) === -1 && this.arrWrongLetters.indexOf(el.toUpperCase()) === -1) {
          this.arrWrongLetters.push(el);
        }
        
        console.log(`"wrong letter, errors left ${6 - this.mistakes} | ${this.arrWrongLetters.join(',')}"`);
      } else {
        console.log(`"${this.array.join('')}"`);
      }
      
      if (this.array.join('') === this.name) {
        console.log("you win!");
      }
      
      return this;
    };
    this.getGuessedString = function() {
      return this.array.join('');
    };
    this.getErrorsLeft = function() {
      let errLeft = 6 - this.mistakes;
      return errLeft;
    };
    this.getWrongSymbols = function() {
      return this.arrWrongLetters;
    };
    this.getStatus = function() {
      return `"${this.array.join('')} | errors left ${6 - this.mistakes}"`;
    };
    this.startAgain = function(name) {
      this.name = name;
      this.array = this.name.split('').map(function(num) {
        return '_';
      });
      this.arrWrongLetters = [];
      this.mistakes = 0;

      return this;
    };
  }
}

const hangman = new Hangman('webpurple');
module.exports = hangman;
