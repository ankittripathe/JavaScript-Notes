/* function
  ?JavaScript functions are blocks of code that can be defined and executed whenever needed and are used to perform specific tasks
  
  Functions are also referred as "first-class function" in JavaScript because they can be treated like any other value, such as a number or a string. This means that they can be assigned to variables, passed as arguments to other functions, and returned as values from functions.

  Types of Function (7 Ways)
  (1) function statement (named function / normal function)
  (2) function expression
  (3) Anonymous function
  (4) Arrow function (fat arrow function)
  (5) Immediate Invoked Function (IIFE)
  (6) High Order function
  (7) constructor function


  functions are the reusable piece of code that can be called and executed at any point in our program.
  Functions can be defined using the function keyword followed by a name, a list of parameters (optional), and a block of code enclosed in curly braces {}.


  ?Syntax
  function functionName() {
    console.log(code to be executed)
  }

  function Name(parameter){
    console.log(parameter)
  }

*/

/* es5 (old version) => In es5 function have 3 types.
   (1) function statements (Named Function / Normal Function)
   (2) function expressions
   (3) anonymous function

*/

// (1) function statement or Normal function
function abcd() {
  // code to be executed
}
abcd();

// (2) function Expression
var sayHello = function () {
  // code to be executed
};
sayHello();

// (3) Anonymous function
// function(){
// code to be executed
// }

/* es6 (new version) => In es6 function have only 1 types.
   !(1) fat arrow function or arrow function
   They can be writeen in 3 ways
   (a) basic fat arrow function
   (b) fat arrow with one parameter
   (c) fat arrow with implicit return
*/

// (1) basic fat arrow function
var a = () => {
  // code to be executed
};
a();

// (2) fat arrow function with one parameter
var b = (parameter) => {
  // code to be executed
};
b(12);

// (3) fat arrow with implicit return
var g = (
  num // code to be executed
) => g(77);

// Agar Ek parameter hai toh uska vi bracket hata skte hai.
var implict = (
  num // code to be executed
) => implict();

// inDepth => js mein functions ko first class function ka darja diya gaya hai, jiska matlab hai js mein function ko value/variable ki tarah treat kiya jata hai.
