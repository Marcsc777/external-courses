class Calculator {
  constructor() {
    this.result = 0;
  }
  setState(el) {
    if (el !== undefined) {
      this.result = el;
      console.log('result = ', this.result);
    }
    
    return this;
  }
  add(el) {
    if (el !== undefined) {
      this.result += el;
    }
    
    return this;
  }
  subtract(el) {
    if (el !== undefined) {
      this.result -= el;
    };
    
    return this;
  }
  divide(el) {
    if (el !== undefined) {
      this.result /= el;
    }
    
    return this;
  }
  multiply(el) {
    if (el !== undefined) {
      this.result *= el;
    }
    
    return this;
  }
  getResult() {
    return this.result;
  }
  reset() {
    this.result = 0;
    
    return this;
  }
  fetchData(callback) {
    setTimeout(() => {callback(500);}, 1500);
  }
}

const newConstructor = new Calculator();
module.exports = newConstructor;
