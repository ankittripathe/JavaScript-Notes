//! Function Expression
// Example.1
const myFun = function (a, b){
  const sum = a + b;
  console.log("Result =", sum);     // output:- 14
};
const final = myFun(10, 4);
console.log(final);     // output:- undefined (because function is not returning anything)

// Example.2
const square = function (num) {
  return num * num;
};
let result = square(4);
console.log(result);     // output:- 16

console.log(square(4)); // Ek hi bar value ke sath function call ho rha hai aur print vi ho rha hai.

// Example.3
const multiply = function (num) {
  return num * num;
};
console.log(multiply(5));   // output:- 25

/*
Q1.What is difference between Normal function &  Expression function ?
 => Normal function me hoisting ke wajah se function chahe Upar/ Niche/ Beech me kahi define ho 
    value(memory me store ho jata hai).

 => Aur Expreeion function me function define krne se pahle call kroge undefined error dega.

**** Example (Right method) ****

const square = function(num){
    return num*num;
}                                      
console.log(square(4));

*** Example (Wrong method) ****

square();         // wrong method function ko pahle call nhi kr skte hai function Expression me.

const square = function(num){
    return num*num;
} 
       
*/
