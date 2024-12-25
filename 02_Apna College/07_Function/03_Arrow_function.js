// Example.1
// Normal function
function sum(a, b) {
  console.log(a + b);
}
sum(10, 20); // output: 30

// Arrow function
const arrowSum = (a, b) => {
  console.log(a + b);
  // return a + b;
};
arrowSum(100, 100);   // output: 200
// console.log(arrowSum(100, 100));  // output: 200, undefined


// Example.2
// Normal function
function mul(a, b) {
  console.log(a * b);
}
mul(5, 5);  // output: 25

// Arrow function
const arrowMul = (a, b) => {
  console.log(a * b);
};
arrowMul(3, 4);  // output: 12

// Example.3
// Normal function
function printHalo(){
  console.log('Hello Good Morning');
}
printHalo();   // output: Hello Good Morning

// Arrow function
const printHello = () => {
  console.log("Hello Namaste");
};
printHello();  // output: Hello Namaste


// fat arrow with implicit return (arrow implicit function)
() => console.log("Expression Here"); // curly bracket hat jata hai arrow implict return function me

() => sometthing; // return nhi likhna padta hai implict function me o apne aap maan leta hai.

(parameter) => expression; // implict return function with parameter

//! storing into varibale //
var name = () => // code to be executed
name();

var userName = (name)  => console.log(userName());


// Example.1 (implicit arrow function)
const sayName = () => console.log("Namaste JavaScripts");
sayName();  // output: Namaste JavaScripts

// Example.2
const check = () => console.log("Tailwind CSS");
check(); // output: Tailwind CSS

// Example.3
let score = () => 91;
console.log(score()); // output: 91

// Example.4
var lang = (framework = "Bootstrap") => framework;
console.log(lang()); // output: Bootstrap

// Example.5
var lang = (framework = "Bootstrap") => framework; // By-default ko overWrite kr denga
console.log(lang("Bulma")); // output: Bulma








