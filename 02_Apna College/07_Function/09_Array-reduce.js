//! reduce() => Reduce an Array to Single value. Doesn't modify the original Array list. //
// Exmaple.1
const array = [1, 2, 3, 4, 5];

const output = array.reduce((previousVal, currentVal) => {
  return previousVal + currentVal;
});
console.log(output); // output: 15
console.log(array); // output: [1, 2, 3, 4, 5]  (doesn't modify the original Array list)

// Example.2 (using Normal function)
const number = [1, 2, 3, 4, 5];

function sortThem(preVal, currVal) {
  return preVal + currVal;
}
let result = number.reduce(sortThem);
console.log(result); // output: 15

// Example.3 (print the largest number in given array)
const arr = [5, 6, 21, 100, 30];

const final = arr.reduce((preVal, currVal) => {
  return preVal > currVal ? preVal : currVal;

  //   if (preVal > currVal){ //upar wale line ka matab yahi hai
  //     return preVal
  //   } else{
  //     return currVal
  //   }
});
console.log(final); // output: 100

// Exmaple.4
const num = [1, 2, 3, 4, 6];

let outcome = num.reduce((result, currVal) => {
  return result + currVal;
});
console.log(outcome); // output: 16
console.log(num); // output: [1, 2, 3, 4, 6] (doesn't modify the original Array list)

// Exmaple.5
let score = [3, 4, 5, 6, 7];

function myFun(preVal, cuVal) {
  return preVal + cuVal;
}
let total = score.reduce(myFun);
console.log(total); // output: 25


// Example.6


