// Example.1
function sayMyName() {
  console.log("Ankit");
  console.log("Learnig JS");
}
sayMyName();
sayMyName();
// output are:- (two time)
// Ankit
// Learing JS

// Example.2
function items() {
  console.log("milk");
}
console.log(items());   // function call & print 
// output are:
// milk
// undefined => because function is not returning anythings

// Example.3
function sayMessage(msg) {//parameter
  console.log(msg);
}
sayMessage("I love javaScripts"); //arguments
// output: I love javaScripts

// Example.4
function myPrint(msg) {
  console.log(msg);
}
myPrint(); // output: undefined

// Example.5
function myPrint(msg) {
  console.log(msg);
}
myPrint(""); // output: empty Space

// Example.6
function myMessage(msg, n) {
  console.log(msg, n);
}
myMessage("loveJs", 100); // output: lovejs 100

// Example.7
function myMessage(msg, n) {
  console.log(msg, n);
}
myMessage("love", "javaScripts"); // output: love javaScripts

// Example.8
function myGoal(msg, n) {
  console.log(msg * n);
}
myGoal("loveJs", 100); // output: NaN

// Example.9
function sum(a, b) {
  console.log(a + b);
}
sum(20, 10); // output: 30


//! Return type function //
// Example.10
function addTwoNum(x, y) {
  sum = x + y;
}
let result = addTwoNum(10, 100);
console.log(result); // output:- undefined (because return kuch nhi ho rha hai, na hi kuch print ho rha)

// Example.11
function addTwo(x, y) {
  sum = x + y;
  return sum;
  console.log("after return "); // will not execute because return ke badd koie vi code Execute nhi hoga
}
let results = addTwo(40, 20);
console.log(results); // output:- 60

// Example.12
function myfun(a, b) {
  console.log(a * b); //NaN
  return a * b; //NaN
}
const finals = myfun(); // will print NaN because koie vi value(arguments) pass nhi huwa hai.
console.log(finals);
// output are:
// NaN
// NaN

// Example.13
function myfun(a, b) {
  console.log(a * b);
  return a * b;
}
const final = myfun("");
console.log(final);
// output are:
// NaN
// NaN

// Example.14
const a = 50;
const b = 50;
sumOfTwo(a, b); // because hoisting is possible in normal function

function sumOfTwo(a, b) {
  sum = a + b;
  console.log(sum);
}
// output: 100

// Example.15
let x = 4;
let y = 3;
function multiply(x, y) {
  return x * y;
}
console.log("Output =", multiply(x, y)); // output: 12

// Example.16
function add(m, n) {
  console.log(`m = ${m}, n = ${n}`);  // m & n is defined because of blocked scope{}
  sum = m + n;
  return sum;
}  
console.log(add(100, 100));  // output: 200
// console.log(m);           // m is not defined because function have blocked scope {}


// Example.17
function squ(num) {
  return num * num;
}
console.log(squ(5));  // output: 25


// ! Normal Function => Normal function me hoisting ke wajah se function kahi vi define ho jaega (upar / niche / beech me)  //
function myFunction() {
  // block of code
  // return somethings
}


// Example.1   // Because of hoisting
let m = 5;
let n = 10;
mySoftware(m, n);

function mySoftware(m, n) {
  sum = m + n;
  console.log(sum);
}
// output:- 15

// Example.2   // Hoisting is possible in Normal Function
function myWork(k, l) {
  return k * l;
}
const k = 9;
const l = 9;
console.log(myWork(k, l)); // output: 81 


// Hoisting:- Hoisting is a JavaScript behavior where variable and function declarations are moved to the top of their containing scope during the compile phase, before the code has been executed. This means that variables and functions can be used before they are actually declared in the code. However, only the declarations are hoisted, not the initializations.




