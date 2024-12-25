/* es6 (new version) => In es6 function have only 1 types.
   !(1) fat arrow function or arrow function
   They can be writeen in 3 ways
   (a) basic fat arrow function
   (b) fat arrow with one parameter
   (c) fat arrow with implicit return
*/

// (1) basic fat arrow function Syntax
() => {}; // yahi hai arrow function

() => {
  // code to be executed
};

//! variable me save kr lenge //
let sayHello = () => {
  // code to be executed
};
sayHello();

// Example.1
const greet = () => {
  console.log("Logic Building");
};
greet(); // output: Logic Building

// Example.2
const hello = () => {
  console.log("Hello"); // output: Hello
  return "Ankit ";
};
let results = hello();
console.log(results); // output: Ankit

// Example.3
const Series = () => {
  console.log({ name: "crush", Rating: 4.8 });
};
Series(); // output: {name: 'crush', Rating: 4.8}

// (2) fat arrow function with one parameter Sntax
(parameter) => {}; // arrow function with one parameter

(parameter) => {
  return something;
};

//! varibale me save kr lenge //
let saleLive = (offer) => {
  // code to be executed
};
saleLive("10%");

// Example.1
const square = (num) => {
  return num * num;
};
console.log(square(5)); // output: 25

// Example.2
const addTwoNumber = (num1, num2) => {
  return num1 + num2;
};
console.log(addTwoNumber(10, 10)); // output: 20

// Example.3
var mobileDev = (lang = "React-Native") => {
  return lang;
};
console.log(mobileDev()); // output: React-Native

// Example.4
var mobileDev = (lang = "React-Native") => {
  return lang;
};
console.log(mobileDev("Fluter")); // output: Fluter

// Example.5
const Show = (database) => {
  return console.log(database);
};
Show({ name: "Shaktimaan", Rating: 4.8 });
// output: {name:'shaktimaan, Rating: 4.8}

// Example.6
const fruits = (checkList) => {
  return checkList;
};
console.log(fruits({ name: "mango", Price: 100 }));
// output: {name: mango, Price: 100}

// (3) fat arrow with implicit return (arrow implicit function)
() => console.log("Expression Here"); // curly bracket hat jata hai arrow implict return function me

() => sometthing; // return nhi likhna padta hai implict function me o apne aap maan leta hai.

(parameter) => expression; // implict return function with parameter

//! storing into varibale //
var name = () =>
  // code to be executed
  name();

var userName = (
  name // code to be executed
) => console.log(userName());

// Example.1
const check = () => console.log("Tailwind CSS");
check(); // output: Tailwind CSS

// Example.2
let score = () => 91;
console.log(score()); // output: 91

// Example.3
const multiply = (num) => num * num;
console.log(multiply(10)); // output: 100

// Example.4 (Agar Ek parameter hai toh usko bracket se hata vi sakte hai like this)
const wishGoodMorning = (greet) => "Good Moring";
console.log(wishGoodMorning()); // output: Good Morning

// Example.5
const hisabKaro = (price) => console.log(9001);
hisabKaro(); // output: 9001

// Example.6
const addTwoNum = (num1, num2) => num1 + num2; // implicit me return nhi likhna padega o assume kr lega
console.log(addTwoNum(200, 200));
// output: 400

// Example.7
var lang = (framework = "Bootstrap") => framework;
console.log(lang()); // output: Bootstrap

// Example.8
var lang = (framework = "Bootstrap") => framework; // By-default ko overWrite kr denga
console.log(lang("Bulma")); // output: Bulma

// Example.9
var lang = (framework = "Bootstrap") => console.log(framework); // implicit return
lang("Materialize"); // output: Materialize

// Example.10
const webSeries = (list) => ({ name: "FamilyMan", Rating: 4.5 });
console.log(webSeries()); // output: {name : 'FamilyMan' , Rating: 4.5}

// Example.11  (object type huwa toh ({})bracket ke ander dall denge implict function me)
const addTwo = () => ({ username: "Ankit" });
console.log(addTwo()); // output: { username: 'Ankit' }

/*
Notes:
(1) curly bracket me hoga toh return likhna padega function call ke liye.

    const addTwoNum = (num1, num2) => {
       return num1 + num2;
    }
    console.log(addTwoNum(10, 10));  // output: 20

(2) Implicit return function me curly bracket ke jagah ( ) use hota hai. return nhi krna padta hai o apne se mann leta hai.  

    const addNum = ()=>  console.log((num1, num2))
    addNum(10, 19);  // output: 29
  
*/
