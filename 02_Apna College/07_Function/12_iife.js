/* Immediately Invoked Function Expressions (IIFE)
  Syntax:-
  ()(); yahi hai iife (last me semi-colon comma hona hi chiye)

  Types of iife:-
  (1) named iife 
  (2) named iife with parameter passed
  (3) unNamed iife or simple iife
  (4) unNamed iife with parameter passed

  Why iife are used:-
  Notes: global scope ke pollution se problem hoti hai kaie baar us global scope ke jo varibale hai jo vi oha decleration hai uske pollution ko hatane ke liye iife ka use kiya jata hai.

  Remember:-iife Ek hi barr use hota hai.
*/

//! (1) named iife
// Example.1
(function chai() {
  // named IIFE bolte hai esko (chai joo hai function ke sath)
  console.log(`Named iife`);
})(); // output: Named iife
// end krne ke liye semi-colon ka use krna hoga nhi toh niche wala me error show hoga

//! (2) named iife with parameter passed
// Examle.1
(function playerName(name) {
  console.log(name);
})("Dhoni"); // output: Dhoni

// Example.2
(function game(example = "Cricekt") {
  console.log(example);
})(); // output: Cricket


//! (3) simple iife or (unNamed iife)
// Example.1
(() => {
  console.log(`arrow iife`);
})(); // output: arrow iife


//! (4) UnNamed iife with parameter passed
// Exmaple.1
((name) => {
  console.log(`Connected ${name}`);
})("Ankit"); // output: Connected Ankit

// Example.2
((greet = 'Good Morning')=>{
  console.log(`hello ${greet}`);
})();  // output: hello Good Morning

// Example.3
((greet = 'Good Morning')=>{
  console.log(`hello ${greet}`);
})('Namaste');  // output: hello Namaste



//! Example of ayncronous iife //
// let foo1 = (async () => {
//   await console.log("A");
//   await console.log("B");
//   await console.log("C");
// })();

// let foo2 = (async () => {
//   await console.log("D");
//   await console.log("E");
//   await console.log("F");
// })();

// let foo3 = (async () => {
//   await console.log("G");
//   await console.log("H");
//   await console.log("I");
// })();




