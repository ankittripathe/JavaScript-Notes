/* for-of loop (string or Array) ke liye used hota hai.  (Es-6) => features
(1) " " or '' => This is String
(2) []  => This is Array
(3) ["", "", ""] =>  Array ke ander string
(4) [{}, {}, {}] =>  Array ke ander object
*/

//! for of loop  => (string ke liye)
// Example.1
let varibale = 'sorry'
for(let iterable of varibale){
    console.log(iterable); 
}
// output:-
// s
// o
// r
// r
// y


// Example.2
let str = "kotlin";
for (let val of str) {
//   console.log("val =", val);
}

// Example.3
const message = "I love Js";
for (const value of message) {
//   console.log("value =", value);
}

// Example.4
for (const ans of "JavaScripts") {
//   console.log(ans);
}

// Example.5
let name = "MahaRaj";
for (let i of name) {
//   console.log(i);
}

// Example.6
const greeting = "Hello Jee";
for (const greet of greeting) {
//   console.log(`Each char = ${greet}`);
}

// Example.7
let lang = 'golang'
let size = 0
for (let words of lang){
    // console.log('i =',words);
    size++
}
// console.log('lang size =', size);



//! for of loop => (Array ke liye)
// Example.1
const Array = [1, 2, 3, 4, 5];

for (const i of Array) {
  console.log(i);
}
// output:- 
// 1
// 2
// 3
// 4
// 5


// Example.2
const fruits = ["mango", "apple", "leechi", "orange"];
for (const iterator of fruits) {
  console.log(iterator);
}
//  output:- 
// mango
// apple
// leechi
// orange


// Example.3
for (let value of ["Ankit", "Dhoni", "Raina"]) {
  console.log(value);
}
// output:-
// Ankit
// Dhoni
// Raina


// Example.4
let age = [22, 24, "male", 32];
for (let value of age) {
  console.log('val =', value);
}

// Example.5
let details = [
  { name: "ankit", age: 23 },
  { name: "avinash", age: 24 },
];
for (const ladke of details) {
  console.log(ladke);
}


