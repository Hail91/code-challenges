// // Practicing with prototypical inheritance in JavaScript
// function Animal(name, energy) {
//   this.name = name;
//   this.energy = energy;
// }
// // Example of adding method to the Animal object's prototype obj
// Animal.prototype.eat = function (amount) {
//   console.log(`${this.name} is eating food!`);
//   this.energy += 1;
// };

// Animal.prototype.sleep = function (len) {
//   console.log(`${this.name} is sleeping!`);
//   this.energy += 3;
// };

// Animal.prototype.play = function (len) {
//   console.log(`${this.name} is playing!`);
//   this.energy -= 1;
// };

// // Create a new type of Animal (Dog) that will inherit from Animal
// function Dog(name, energy, breed) {
//   Animal.call(this, name, energy);
//   this.breed = breed;
// }
// // This tells javaScript to basically "extend" the Animals prototype to Dog, now Any object created with Dog class
// // Will have access to methods on the Animal class.
// Dog.prototype = Object.create(Animal.prototype);

// // Below line will reset Dog's constructor to point at Dog class instead of Animal.
// Dog.prototype.constructor = Dog;

// const barney = new Dog("barney", 10, "lab");

// ---------------------------------------------
// ** ES6 IMPLEMENTATION **

class Animal {
  constructor(name, energy) {
    this.name = name;
    this.energy = energy;
  }

  eat(amount) {
    console.log(`${this.name} is eating food!`);
    this.energy += 1;
  }

  sleep(len) {
    console.log(`${this.name} is sleeping!`);
    this.energy += 3;
  }

  play(len) {
    console.log(`${this.name} is playing!`);
    this.energy -= 1;
  }
}

// The extends keyword will allow Dog to access methods on the Animal class
class Dog extends Animal {
  constructor(name, energy, breed) {
    // Super allows us to access attributes from parent class
    super(name, energy);
    this.breed = breed;
  }

  bark() {
    console.log("Woof");
    this.energy -= 1;
  }
}

const rocko = new Dog("rocko", 10, "small");

console.log(rocko);
