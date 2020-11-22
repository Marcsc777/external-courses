class MyConstructor {
  constructor() {
    this.result = 0;
    
    this.setState = function(el) {
      if (el !== undefined) {
        this.getResult = function() {
          return el;
        }
      }
      
      return this;
    };
    
    this.add = function(el) {
      if (el !== undefined) {
        this.result += el;
      }
      
      return this;
    };
    
    this.subtract = function(el) {
      if (el !== undefined) {
        this.result -= el;
      };
      
      return this;
    };
    
    this.divide = function(el) {
      if (el !== undefined) {
        this.result /= el;
      }
      
      return this;
    };
    
    this.multiply = function(el) {
      if (el !== undefined) {
        this.result *= el;
      }
      
      return this;
    };
    
    this.getResult = function() {
      return this.result;
    };
    
    this.reset = function() {
      this.result = 0;
      
      return this;
    };
    
    this.fetchData = function(callback) {
      this.result = 500;
      setTimeout(callback, 3000, this.result);
      return this;
    };
  }
}

const newConstructor = new MyConstructor();
module.exports = newConstructor;
