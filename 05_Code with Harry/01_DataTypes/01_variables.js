//  Differnce between let, var & const  //

// (1) var => var can be redeclare & updates (global scoped)  //
// Example.1
var num = 54;
var num = 50; // var can be updated and re-declared
console.log(num); // output: 50

// Example.2
var name = "Ram"; // var is global scoped
{
  var name = "God";
  console.log(name); // output: God
}
console.log(name); // output: God

// (2) let => can't be redeclared but can updated only (block scope)
// Example.1
let num1 = 50;
num1 = 400; // let can't be re-declared but can be updated only
console.log(num1); // output: 400

// Example.2
let name = "krishna";
{
  let name = "Bhagwan";
  console.log(name); // output: bhagwan
}
console.log(name); // output: krishna

// Example.3
let car = "tata"; // assign value  at the same time
console.log(car);

// Example.4
let cars; // value can be assign later as well
cars = "tata";
console.log(cars);

// (3) const => const can't be re-declared & updated (blocked scope)
// Exaple.1
const author = "Ankit";
// let author = "Ram"  // throw an error because constant can not be changed
// author = "ekta"    // can't be updated
console.log(author);

// Example.2
// const salery;  //show error bcz conts can always be declared at the same time

// Variable Rules  => Began with only letter(a-z or A-Z) , underscore(_), or dollar($) //
let name = "Ankit"; // allowed
let _name = "Ankit"; // allowed
let $name = "Ankit"; // allowed
// let 8ankit = 7   // not allowed
let title = "software";
let TITLE = "cloud Engineer"; // case sensitive
