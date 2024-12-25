//! 01. Variable & Constants //

/*
  ? Js ya kisi vi language me aapko kaie baar data store krne padta hai, Us case me use hota hai variable ka.
  ("In JavaScript or any other language, sometimes you need to store data In such cases, variables are used.")

  Js mein 2 version hai
  es-5 (old) => var
  es-6 (new) => let, const
  we can use both es5 + es6.
*/

//  var se vi variable bana skte hai aur, let se vi varible bana skte hai.
var num1 = 66;
console.log("num1 =", num1);

let num2 = 99;
console.log("num2 =", num2);

/*
  var, let dono hi tarkeen hai js mein variable banane ke. Kya Enme koie farak hai ?
  ("Both var and let are ways to create variables in JavaScript)
  mainly 3- farak hai.
  
  (1) var(es-5) purani js ka hai aur let(es-6) new js ka hai.
  (2) var function scoped (global scoped) hota hai & let braces scoped {} (block scoped) hota hai.
  (3) var add itself to the window object whereas let doesn't add.
*/

/* 
  (2) var function scoped (global scoped) hota hai & let braces scoped {} (block scoped) hota hai.

   var apne nearest function me kahi vi use ho skta hai. yaha 6 tak hi print hona chiye tha but 7 vi huwa because
   console(i) braces ke badd vi  run krwaya gaya hai so, it will print 7 as well.

*/

// function Scoped
function abcd() {
  for (var i = 1; i < 7; i++) {
    console.log("i=", i);
  }
  console.log(i);
}
abcd();

// braces scoped (block scope)
function myNum() {
  for (let i = 100; i < 108; i++) {
    console.log("i=", i);
  }
  //  console.log(i);  //! through error because let is a braces scoped not a function scoped
}
myNum();


// (3) var add itself to the window object. whereas let doesn't
//TODO: console open kr ke type  => window (will see there ) //

var a = 22;

let b = 44;
let c = 88;



//! 02. Window object  //
/*
  window is an object jisme wo saare features and cheejein bahri huie hai jo ki directly js ka part nhi hai balki 
  aapko browser ke dwaara dee jaati hai to use for the dovelopment and testing purpose.
*/

//! 03 varaible & const //
var k = 100;
var k = 200;   // var can be re-decleared & updated.
k = 101;       // var can be updated.
console.log("k =", k);

let l = 200;
// let l = 199;     // let can't be re-decleared but can be upadte only
l = 2;              // let can be updated only.
console.log("l =", l);

const x = 7;
// x = 22;                // through error because const value can't be updated.
// const x = 11;          // through error because const cann't be re-decleared and updated.
console.log("x =", x);
