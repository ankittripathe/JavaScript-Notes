// case sensitive  //
const name = "Ankit";
const Name = "Tripathi";
const NAME = "Bagad Billa";
console.log("name =", name); // output:- name = Ankit
console.log("Name =", Name); // outpt:- Name = Tripathi
console.log("NAME =", NAME); // outpt:- NAME = Bagad Billa

//! Difference between let, var & const
/*  (1) let:-
    (a) can't be re-decleared, but can be updated only
    (b) block scoped
*/

let age = 24; // declaration + initalization
console.log("age =", age); // output:- age = 24

// let age;  // re-decleration is not possible in let
age = 28; // but value can be updated
console.log("age =", age); // output:-age = 28

// let is blocked scoped
// Example.1
let num = 100;
{
  let num = 77;
  console.log(num); // 77
}
{
  let num = 200;
  console.log(num); // 200
}
console.log("num =", num); // 100

// Example.2
function example() {
  if (true) {
    let x = 10; // x is scoped to this block
    console.log(x); // 10
  }
  // console.log(x); // Error: x is not defined (because x is block-scoped)
}
example();

/* (2) var:-
    var can be re-decleared and updated.
    var is functional-scoped => apne function me kahi vii use ho skta hai.
    var is global scoped
*/

var course = "javaScripts";
console.log(course); // output:- JavaScripts

var course = "TypeScripts"; // var can be re-decleared and updated.
console.log(course); // output:- TypeScripts

course = "ReactJs"; // var can be updated as well
console.log(course); // output:- ReactJs

// var is functional scoped
// Example.1
function example() {
    if (true) {
      var x = 99;      
      console.log(x); // 99
    }
    console.log(x);  // 99
  }
  example();


// var is global scoped
var luckyNumber = 7
{
    var luckyNumber = 11
    console.log(luckyNumber);
}
{
    var luckyNumber = 22
    console.log(luckyNumber);
}
console.log(luckyNumber);

/* (3) const:-
   can't be re-decleared and updated.
   blocked-scoped
*/
const month = 'december'
console.log(month);    // output:- december

// const month = 'january' // re-decleared & updation is not possible in const

// const is blocked- scoped
function demo() {
    if (true) {
      const x = 7;      
      console.log(x); // 7
    }
    // console.log(x);   // Error: x is not defined
}
demo();

