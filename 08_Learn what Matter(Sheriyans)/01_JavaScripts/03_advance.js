//! (1) High Order Function
//The fuction which Accept  A function in A parameter or Return A function or Both.
//ForEach method always Takes Another Function inside it, So forEach is A high Order Function.
//aaisa function jo accept krle ek aur function ya fir  wo return karde ek aur function

// Example.1
function abcd(val) {
  console.log();
}
abcd(function () {});

// Example.2
function xyz() {
  return function () {};
}
xyz;

// Example.3
var arr = [1, 2, 3, 4, 5];
arr.forEach(function () {});

//! (2) Constructor Function
//normal function jisme this ka istemaal ho & aap function ko call krte waqt new keyword ka use karein.

// A function which  Whenever invoked(call) With  "New keyword" Returns An Object, If We Use "This" keyword inside That function, It Returns An Object with All of the Properties & Methods Mentioned inside That Function, Such Fucntion is Called Constructor Function.

// Example.1
function saachaOfbiscuits() {
  this.width = 12;
  this.height = 22;
  this.color = "brown";
  this.taste = "sugary";
}

var bis1 = new saachaOfbiscuits();
var bis2 = new saachaOfbiscuits();
var bis3 = new saachaOfbiscuits();
console.log(bis1);
console.log(bis2);
console.log(bis3);

//Notes: jab aapke paas aaisa koie bhi mauka ho ki aapko Ek jaisi properties waale bahut saare elements banaane hai us waqt aap constructor function use kar sakte hoo.

// Example.2
function circularBtnBanno(kolor) {
  this.radius = 2;
  this.color = kolor;
  this.icon = false;
  this.pressable = true;
}
let redBtn = new circularBtnBanno("red");
console.log(redBtn);

let greenBtn = new circularBtnBanno("green");
console.log(greenBtn);

//! (3) First Class Function
// A language is Said to Have First class Function  when The functions In that language Are Treated As Noraml Values, You can Save them, You can pass Them As Arguments to another Functions.

// Example.1
setTimeout(function () {});

// Example.2
function kuchvi(val) {
  console.log(val);
}
kuchvi(function () {});
// js me function Normal function ko First class Function bolte hai.

//! (4) new keyword
// new keyword always create a blank object for the constructor function which is getting called just after new keyword.

// jab bhi new lagta hai humesha ek blank object apne maan me bana loo

function xyz() {
  this.age = 24;
}

new xyz();

{
  12;
}

//! (5) iife:- Immediately invoked function Expression
//iife hai function ko turnat chalana ki kala, Es tareeke se ki ham log koi private variable bana paaye
