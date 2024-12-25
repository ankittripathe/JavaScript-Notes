/* constructor(){} method:-
   . automatically invoked by new
   . initializes objects
*/
// The constructor is a special method that is used in object-oriented programming (OOP) to create and initialize new objects. In JavaScript, constructors are used to create objects that share the same properties and methods, and they are defined using the constructor keyword.


// Example.1
function makeHuman(name, age) {
  this.name = name;
  this.age = age;
  // Lefthand Side:- varibale hai
  // Righthand Side:- arguments hai jo pass krte hai
}

const human1 = new makeHuman("Ankit", 24);
// console.log(human1);

// Aaisi koie vi function jismein aap this ka use kr rhe ho aur us function ko call karte waqt aap new ka upyog karein. new ka matalb oha pe Ek blank object create ho jata hai.

// Example.2
function userDetails(name, age, isLoggedIn) {
  this.name = name;
  this.age = age;
  this.isLoggedIn = isLoggedIn;
  this.role = "software Engineer";

  this.greet = function () {
    return `welcome ${this.name}`;
  };
}

// user1
let user1 = new userDetails("Ankit", 24, true); // constructor invoke with arguments passed
console.log(user1);
console.log(user1.name); // output:- Ankit
console.log(user1.greet()); // output:- welcome Ankit

// user2
let user2 = new userDetails("Avinash", 25, false); // constructor invoke with arguments passed
console.log(user2);
console.log(user2.role);

// user3
let user3 = new userDetails(); // constructor invoke with undefined
console.log(user3);

user3.name = "Shivangi"; // adding value here
user3.age = 23;
console.log(user3);


// Example.3
// Constructor Function
function Person(name, age) {
  this.name = name;  // Object-specific property
  this.age = age;
}

// Adding shared method using prototype
Person.prototype.greet = function () {
  return `Hello, I am ${this.name}`
};

const person1 = new Person("Adhya", 25);
console.log(person1.name);   // output: kabir
console.log(person1.greet);  // output: Hello, I am Adhya.
