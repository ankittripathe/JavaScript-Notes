//! (1) Classes:- Classes in JavaScript are templates for creating objects. They encapsulate data (properties) and behavior (methods).
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Method
  greet() {
    console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

// Creating an object
const person1 = new Person("Archie", 25);
person1.greet(); // output: Hi, my name is Archie and I am 25 years old.

//! (2) Inheritance :- Inheritance allows one class to extend another, enabling code reuse.
class Animal {
  constructor(name) {
    this.name = "Jockey";
  }

  sound() {
    return "barks";
  }
}

class Dog extends Animal {
  sound() {
    console.log(`${this.name} barks.`);
  }
}

const mydog = new Dog();
mydog.sound(); // output: Jockey barks.

//! (3) Prototypes:- JavaScript uses prototypes to implement inheritance. Every object in JavaScript has an internal prototype chain.
function Person(name) {
  this.name = name;
}

Person.prototype.greet = function () {
  console.log(`Hi, I'm ${this.name}`);
};

const user1 = new Person("John");
user1.greet(); // output: Hi, I'm John
