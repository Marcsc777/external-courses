class Hangman {
  constructor(name) {
    this.name = name;
    this.array = this.name.split('').map(function(num) {
      return '_';
    });
    this.arrWrongLetters = [];
    this.mistakes = 0;
  }
  guess(el) {
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
    
    //return this - тесты не дают это написать.. чтобы выполнить задание, но тесты отличаются от задания....
  }
  getGuessedString() {
    return this.array.join('');
  }
  getErrorsLeft() {
    let errLeft = 6 - this.mistakes;
    
    return errLeft;
  }
  getWrongSymbols() {
    return this.arrWrongLetters;
  }
  getStatus() {
    return `"${this.array.join('')} | errors left ${6 - this.mistakes}"`;
  }
  startAgain(name) {
    this.name = name;
    this.array = this.name.split('').map(function(num) {
      return '_';
    });
    this.arrWrongLetters = [];
    this.mistakes = 0;
    return this;
  }
}

const hangman = new Hangman('webpurple');
module.exports = hangman;
