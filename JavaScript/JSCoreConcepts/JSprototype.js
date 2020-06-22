// Practicing with prototypical inheritance in JavaScript
function Animal(name, energy) {
  this.name = name;
  this.energy = energy;
}
// Example of adding method to the Animal object's prototype obj
Animal.prototype.eat = function (amount) {
  console.log(`${this.name} is eating food!`);
  this.energy += 1;
};

Animal.prototype.sleep = function (len) {
  console.log(`${this.name} is sleeping!`);
  this.energy += 3;
};

Animal.prototype.play = function (len) {
  console.log(`${this.name} is playing!`);
  this.energy -= 1;
};

// Create a new type of Animal (Dog) that will inherit from Animal
function Dog(name, energy, breed) {
  Animal.call(this, name, energy);
  this.breed = breed;
}

const barney = new Dog("barney", 10, "lab");
