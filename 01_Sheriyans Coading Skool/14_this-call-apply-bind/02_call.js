// Call():-Invokes a function with a specific this value and arguments passed individually.
// Syntax: functionName.call(thisArg, arg1, arg2, ...)

//   Example.1
const human = { name: "Raaz", age: 23 };

function details() {
  console.log(this);  // output:- { name: 'Raaz', age: 23 }
} 
details.call(human);


// Example.2
const user1 = { name: "Alice" };

function introduce(greeting, age) {
  return `${greeting}, my name is ${this.name} and I am ${age} years old.`;
}

console.log(introduce.call(user1, "Hi", 25));   // Use call to specify `this` and pass arguments
// Output: "Hi, my name is Alice and I am 25 years old."


// Example.3
const person1 = { firstName: "John", lastName: "Abraham" };

const person = {
  user: function (greeting) {
    return `${greeting}, my name is ${this.firstName} ${this.lastName}`;
  },
};

console.log(person.user.call(person1, "Hello"));
// Output: "Hello, my name is John Abraham"


// Example.4
const details1 = {
  firstName: "Avinash",
  lastName: "Pandey",
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};

const details2 = {
  firstName: "Asish",
  lastName: "karn",
};

// Borrow the `getFullName` method from details1
console.log(details1.getFullName.call(details2));
// Output: "Asish karn"

// Example.5
function Animal(name, sound) {
  this.name = name;
  this.sound = sound;
}

function Dog(name, breed) {
  Animal.call(this, name, 'Bark'); // Call Animal constructor
  this.breed = breed;
}

const myDog = new Dog("Tom", "Labrador");
console.log(myDog.name); // Output: "Tom"
console.log(myDog.sound); // Output: "Bark"
console.log(myDog.breed); // Output: "Labrador"
console.log(myDog);


// Example.6
function Product(name, price) {
  this.name = name;
  this.price = price;
}

function Food(name, price) {
  Product.call(this, name, price);
  this.weight = "500gm";
}

let item = new Food("ghee", 600);
console.log(item);
console.log(item.name); // output: "ghee"
console.log(item.price); // output: 600
console.log(item.weight); // output: 500gm



