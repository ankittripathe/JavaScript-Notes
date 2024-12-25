// closure:- Ek function jo return kare doosra function, aur use kare parent function ka koie variable

// Example.1
function abcd() {
  let a = 12;
  return function () {
    console.log(a);
  };
}
let answer = abcd();
console.log(answer); // output:- returns innerfunction:- [Function (anonymous)]
answer();

// Example.2
function outerFun() {
  let outerVariable = "I am from outer scope";

  function innerFun() {
    console.log(outerVariable); // Accessing outerVariable from innerFunction
  }

  return innerFun; // Returning the inner function
}

const final = outerFun();
console.log(final); // output:- outerFun is executed, returns innerFun

final(); // outputs: I am from outer scope

// Example.3
function User() {
  let name = "krishna";

  return function displayName() {
    console.log(name);
  };
  // shirft function hi nhi pura scope(lecical Scope) return hota hai closure me matlab Eske ander ki sari cheeje
}

const myUser = User();
myUser()
