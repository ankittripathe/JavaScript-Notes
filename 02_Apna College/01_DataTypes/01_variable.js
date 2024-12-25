fullName = "Ankit Tripathi";
FULLNAME = "Ms Dhoni";
// JS is case sensitive

console.log(fullName);   // output:- Ankit Tripathi
console.log(FULLNAME);   // output:- Ms Dhoni

// ! Difference between  let, const, var  // 
/* (1) let can't be re-declared but only can be updated (blocked Scoped) */ 
let Name = "Ankit";
// let Name = 'tonny'  // error because let can't re-decleared but can be updated only.
Name = "Dhoni";        // can be updated only
console.log(Name);     // output:- Dhoni

// Example of let (Blocked Scope) //
// Example.1
let player = "Dhoni";
{
  let player = "Raina";
  console.log(player);
}
console.log(player);
// output:-
// Raina
// Dhoni


// Example.2
let game = "hockey";
{
  let game = "cricket";
  console.log(game);
}
{
  let game = "chess";
  console.log(game);
}
console.log(game);
// output:-
// cricket
// chess
// hockey


// Example.3
let stocks = 'cdsl'
{
  let stocks = 'Rvnl'
  console.log('stocks =', stocks);  // stocks = Rvnl
  {
    let stocks = 'irctc'
    console.log(stocks);   // irctc
  }
  console.log(stocks);     // Rvnl
}
console.log('Stocks =', stocks)  // stocks = cdsl
// output are:-
// Rvnl
// irctc
// Rvnl
// cdsl



/* (2) const can not be re-decleared or update (blocked scoped)  */
const num = 44;
// const num = 14   // through Error because const can't be re-decleared
// num = 66;        // through Error because const can't be updated
console.log(num);   // output:- 44


// Example of const (Blocked Scope) //
// Example.1
const number = 7;
{
  const number = 77;
  console.log(number);
}
console.log(number);
// output:- 77
// output:- 7


// Exmple.2
const lang = "python";
{
  const lang = "kotlin";
  console.log(lang);       // kotlin
  {
    const lang = "java";
    console.log(lang);    // java
  }
}
{
  const lang = "TypeScripts";
  console.log(lang);   // TypeScripts
}
console.log(lang);     // python
// output:-
// kotlin
// java
// TypeScripts
// python


/* (3) var can be re-decleare & updated (global scoped) */
var a = 10;
var a = 207;    // re-decleared is possible in var
a = 404;        // updated is also possible in var
console.log(a); // output a = 404


// global Scope (var follow global scope) //
// Example.1
var bike = "Bullet";
{
  var bike = "Yamaha";
  console.log(bike);          
}
console.log('bike =', bike);    // Output:- bike = yamaha
console.log(bike);              // Output:- yamaha
console.log(bike);              // Output:- yamaha


// Example.2
var name = "Amar";
{
  var name = "Sam";
  console.log('name =', name);   // output:- Sam
  {
    var name = "shiva";
    console.log(name);            // output:- shiva
  }
  console.log(name);              // output:- shiva
}
console.log(name);               // output:- shiva
console.log('name =', name);     // output:- name = shiva


//! Variable Rules :- Began with only letter (a-z or A-Z), underscore(_), or dollar($). //
// Example.1
const hero = "krissh"; 
console.log('hero =', hero);  // output:- krissh

// Example.2
const _hero = "G.one";
console.log(hero);   // output:- G.one

// Example.3
const $hero = "shaktimaan";
console.log($hero);  // output:- shaktimaan

// Example.4
// const 1car = 'baleno'  // not allowed 



//! Blocked Scope (let & const follow blocked Scoped) //
// Example.1
{
  let myName = "Ankit";
  console.log(myName);     // output:- Ankit
}
{
  let myName = "Tripathi";
  console.log(myName);    // output:- Tripathi
}
// output:-
// Ankit
// Tripathi


//! global Scope (var follow global Scoped) //
// Example.1
var myLaptop = "Acer";
{
  var myLaptop = "lenavo";
  console.log(myLaptop);  // output:- lenavo
}
{
  var myLaptop = "mackbook";
  console.log(myLaptop);  // output:- mackbook
}
console.log(myLaptop);    // output:- mackbook

// output :
// lenavo
// mackbook
// mackbook


// Variable declared globally
const color = 'blue';

function printColor() {
  console.log(color);
}

printColor(); // => blue

