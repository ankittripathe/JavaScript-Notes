//** (2) Expression Function  **//
/*
! (a) Expression function without argument passed
? Syntax
 const myFun = function(){
  /// block of code
  /// return something
};
myFun()

? Note: Expression Function define krne ke badd hi function call hoga otherwise it will show Error (undefined)
*/

// Example.1
const myName = function () {
  console.log("Ankit");
};
myName(); // output: Ankit

// Example.2
const sayHello = function () {
  console.log("Prestiage");
};
console.log(sayHello()); // output: prestige, undefined (because it doesn't return anything)

/*
! (b) Expression function with argument passed
? Syntax
 const myFun = function (par1, par2) {
  /// block of code
  /// return something
};
myFun()
*/

// Exmple.1
const findSquare = function (num) {
  console.log(num * num);
};
findSquare(4); // output: 16

// Example.2
var mobileBrand = function (brand = "GooglePixel") {
  console.log(brand);
};
mobileBrand(); // yaha kuch nhi diya hai function call ke time toh By-default wala parameter le lega
// output: GooglePixel

// Example.3
var mobileBrand = function (brand = "GooglePixel") {
  console.log(brand);
};
mobileBrand("iphone"); // Agar yaha iphone nhi dete toh By-default parameter le leta GooglePixel
// output: iphone

// Example.4
var mobileBrand = function (brand) {
  console.log(brand);
};
mobileBrand(); // output: undefined (because function call ke time kuch nhi define kiya hai)

// Example.5
let bigBillionSale = function (offer) {
  console.log(offer); // undefined
};
console.log(bigBillionSale());
// output: undefined, undefined (because function call ke time kuch nhi defined kiya nhi function kuch return kr raha hai)

//! Expression function with return type
// Example.1
const square = function (num) {
  return num * num;
};
console.log(square(5)); // output: 25 (function call and print)

// Exmaple.2
const sum = function (a, b) {
  add = a + b;
  console.log(add); // output: 9
  return add;
};
let result = sum(4, 5);
console.log(result); // output: 9 (return type)

// Exmple.3
const addTwo = function (num) {
  return num + 2;
};
console.log(addTwo(55)); // output: 57

// Exmaple.4
const greet = function (msg) {
  return msg;
};
// console.log(greet());        // output: undefined
console.log(greet("Namaste")); // output: Namaste

// Example.5
const offer = function (discount = "10%") {
  // By-default parameter
  return discount;
};
console.log(offer()); // output: 10%

// Example.6
const items = function () {
  return;
};
console.log(items()); // output: undefined

// Example.7
function myfun(a, b) {
  return a * b; //NaN
}
const final = myfun(); // will print NaN because koie vi val(arguments) pass nhi huwa hai.
// const final  = myfun("")
console.log(final);

// Example.8
// helloBolo();   // hoisting is not possible in Expression function

var helloBolo = function () {
  console.log("Hi!");
};
// Function expressions (including arrow functions) are not hoisted in the same way. If you try to call them before they're defined, you'll get an error.