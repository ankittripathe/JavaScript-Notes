/* Immediately Invoked Function Expressions (IIFE)
  An IIFE is a JavaScript function that runs as soon as it is defined.
  Syntax:-
  ()(); yahi hai iife (semi-colon comma hona hi chiye nhi toh uske niche wale code me error dega)

  Types of IIFE:-
  (1) named iife 
  (2) named iife with parameter passed
  (3) unNamed iife or simple iife
  (4) unNamed iife with parameter passed

  Why IIFE are used:-
  . Avoid Global Scope Pollution
  . Create a Private Scope
  . Avoid Variable Hoisting Issues
  . Legacy Code Management
  . Prevent Code Conflicts

  Remember:-iife Ek hi barr use hota hai.
*/

//! (1) named IIFE
// Example.1
(function chai() {
    console.log(`Named iife`);
  })(); // output: Named iife
  // End krne ke liye semi-colon ka use krna hoga nhi toh niche wala code me error show hoga.
  
  
  //! (2) named iife with parameter passed
  // Examle.1
  (function playerName(name) {
    console.log(name);
  })("Dhoni"); // output: Dhoni
  
  // Example.2
  (function game(example = "Cricekt") {
    console.log(example);
  })(); // output: Cricket
  
  // Example.3
  (function game(example = "Cricekt") {
    console.log(example);
  })('chess'); // output: chess
  
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
  let foo1 = (async () => {
    await console.log("A");  
    await console.log("B");
    await console.log("C");
  })();
  // console.log(foo1);
  
  let foo2 = (async () => {
    await console.log("D");  
    await console.log("E");
    await console.log("F");
  })();
  // console.log(foo2);
  
  