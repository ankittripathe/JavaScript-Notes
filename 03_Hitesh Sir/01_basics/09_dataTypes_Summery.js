/*
  (1) Primitive Data types:
  (a) Number
  (b) String
  (c) Boolean
  (d) null
  (e) undefined
  (f) Symbol
  (g) BigInt
*/


/*
 (2) Reference (Non Primitive) data types:
 (a) Arrays []
 (b) Object  {}
 (c) Functions (){}
*/


//! Array []
// Example.1 
const heros = ["Skatikmaan" , "Bahubali", "Hatim"] ;   // This is array
console.log('heros =',heros);       // output: ["Skatikmaan" , "Bahubali", "Hatim"]
console.log(typeof heros);          // output: object
 

//! object {}
// Example.2
let myName = {}   //=> This is empty object
console.log('myName =', myName);    // output: {}
console.log(typeof myName);         // output: object


// Example.3
let myObj = {
    name: "Ankit",              // inside curly braces is object type
    age: 24,
}
console.log(myObj);             // output: { name: 'Ankit', age: 24 }
console.log(typeof myObj);      // output: object


//! function (){}
// Example.4
const myFunction = function (){
      console.log("Hello World");
}
console.log(typeof myFunction);      // output: function object bolte  hai 


// Example.5
const id = Symbol('123')
console.log(id);            // output: Symbol(123)
console.log(typeof id);     // output: symbol