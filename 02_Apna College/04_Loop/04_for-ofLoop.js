// for-of loop (string or Array) ke liye

//! for of loop  => string ke liye
// Example.1
let str = "JavaScripts";
for (let val of str) {
  console.log("val= ", val);
}
// output are:-
// j
// a
// v
// a
// S
// c
// r
// i
// p
// t
// s


// Example.2
for (let b of "Ankit") {
  console.log(b);
}
// output are:-
// A
// n
// k
// i
// t


// Example.3
let name = "MahaRaj";
for (let i of name) {
  console.log(i);
}
// output are:-
// M
// a
// h
// a
// R
// a
// j


// Example.4
let lang = "java";
let size = 0;
for (let words of lang) {
  console.log("i =", words);
  size++;
}
console.log("lang size =", size);  // output: 4


// Example.5
let hospitalName = "Sahara";
for (let val of hospitalName) {
  console.log("val =", val);
}
// output are:-
// S
// a
// h
// a
// r
// a


// Example.6
for (let name of "Ekta") {
  console.log(name);
}
// output are:-
// E
// k
// t
// a


//! for of loop => Array ke liye
// Example.1
let array = ["Ram", "Sita"];
for (let b of array) {
  console.log(b);
}
// output are:-
// Ram
// Sita


// Example.2
for (let value of ["Ankit", "Dhoni", "Raina"]) {
  console.log(value);
}
// output are:-
// Ankit
// Dhoni
// Raina


// Example.3
let age = [22, 24, "male", 32];
for (let value of age) {
  console.log("val =", value);
}
// output are:-
// 22
// 24
// male
// 32




