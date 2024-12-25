//! map => Return a new Array list, and doesn't modify the original Array list. //
// Example.1
const array = [10, 20, 30, 40];

const newArray = array.map((val) => {
  return val * val;
});
console.log(newArray); // output: [100, 200, 300, 400]
console.log(array);    // output: [10, 20, 30, 40]


// Example.2
const arr = [5, 6, 7, 8, 9];

let newArr = arr.map((value, index, array) => {
  console.log(value, index, array);
  return value * 10
});
console.log(newArr);  


// Exmaple.3
let a = [2, 4, 6, 8];

let newA = a.map((val, index, array) => {
  return val * val;
});
console.log(newA);// output: [4, 16, 36, 64]
console.log(a);   // output: [2, 4, 6, 8]  (does not modify the original Array)

// Example.4
const number = [1, 2, 3, 4]
const save = number.map(val=> val * val)  // using arrow implicit return 
console.log(save);  // output:- [1, 4, 9, 16]
