function Appliences(name, powerConsumption) {
  this.name = name;
  this.powerConsumption = powerConsumption;
}
function Room (name) {
  this.name = name;
}
Room.prototype.pluggetIn = function(pluggetIn) {
  this.pluggetIn = pluggetIn;
};
Room.prototype.determinePower = function() {
  let summ = room.pluggetIn.reduce(function(previousValue, currentValue) {
    return previousValue + currentValue.powerConsumption;
    }, 0);
  
  return `Мощность электроприборов в комнате: ${summ} Вт`;
}
Room.prototype.hasName = function(nameAppliences) {
  return this.name.some(function(value) {
    return value.name === nameAppliences;
  })
};
let toaster = new Appliences(`Toaster`, 800);
let coffeeMaker = new Appliences(`Coffee maker`, 750);
let deepFryer = new Appliences(`Deep fryer`, 1500);
let kettle = new Appliences(`Kettle`, 500);
let room = new Room([toaster, coffeeMaker, coffeeMaker, deepFryer, kettle]);
room.pluggetIn([coffeeMaker, toaster, toaster]);

console.log(room);
console.log(room.pluggetIn);
console.log(room.determinePower());
console.log(room.hasName(`Coffee maker`));
