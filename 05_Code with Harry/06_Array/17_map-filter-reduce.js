//! (1) map() => returns new array  //
// Exmaple.1
let arr = [45, 55, 90];
let a = arr.map((value) => {
  return value + 1;
});
console.log("a =", a);

// Example.2
let Array = [3, 5, 1, 2, 4];
let newArray = Array.map((value, index, array) => {
  console.log(value, index, array);
  return value + 1;
});
console.log(newArray);

// Example.3
const numbers = [65, 44, 12, 4];
const store = numbers.map(function myFunction(num) {
  return num * 10;
});
console.log(store);

// Example.4  (another method)
let score = [10, 20, 30];
let answer = score.map(card);

function card(val) {
  return val * 2;
}
console.log(answer);



//! (2) filter()   //
// Example.1
let age = [32, 33, 23, 20, 19, 2, 16, 40];
let newAge = age.filter((checkAge) => {
  return checkAge < 18;
});
console.log(newAge);

// Example.2 (Another method)
const ages = [32, 33, 16, 40];
const result = ages.filter(myFunction);

function myFunction(age) {
  return age >= 18;
}
console.log(result);



//! (3) reduce()  //
// Example.1
let student = [1, 2, 3, 5, 2, 1];
let list = student.reduce((a1, a2) => {
  return a1 - a2; // pahli aur dusri value ko leke  function chalega
});
console.log(list);

// Example 2
let students = [1, 2, 3, 5, 2, 1];
let lists = students.reduce((a1, a2) => {
  return a1 + a2;
});
console.log(lists);
