//! Expression Function => Expression Function define krne ke badd hi function call hoga otherwise it will show Error (undefined)  //

/* Syntax
const myFun = function (par1, par2) {
    /// block of code
    /// return something
}
*/


//! Expression function is also called Anonymous function
// Example.1
const myName = function () {
  console.log("Ankit");
};
myName(); // output: Ankit


// Example.2
const square = function (num) {
  return num * num;
};
console.log(square(5)); // output: 25 (function call & print here)


// Exmaple.3
const sum = function (a, b) {
  add = a + b;
  console.log(add);     // 9
  return add;
};
let result = sum(4, 5);
console.log(result); // return type
// output are:
// 9 (console wala)
// 9 (return type)


// Example.4
const items = function (para = "Ankit") {
  console.log(para);
};
console.log(items());
// output are:
// Ankit
// undefined =>(because function expression return type hota hai)


// Exapple.5
const brand = function (demo = "Acer") {
  return demo;
};
console.log(brand("dell")); // output: dell








