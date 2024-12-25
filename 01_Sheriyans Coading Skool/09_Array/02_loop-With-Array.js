/* forEach() loop :-
  (1) way to iterate through an array. The forEach method takes a callback function as its argument, which is called on each element in the array.

  (2) forEach() method shirf Array pe chalta hai matlab ki jab bhi tumhaare paas Ek array ho, tab usme hum use kr skte hai forEach loop ka.

  (3) forEach Ek normal loop nhi hai for & while ki tarah jo numbers, pe start, end par chalta hai, forEach loop shirf Array pe chalta hai.

  (4) forEach mecthod doesn't modify the original Array
  
  (5) Note: forEach() => methods is used for Array only not for Strings.

  (6) forEach loop directly accesses each element of the array, making the code more readable and expressive

  (7) Notes: The for each loop is commonly used for various tasks, such as:
  (a) Iterating over arrays to perform operations on each element.
  (b) Executing asynchronous tasks for each item in an array.
  (c) Filtering or transforming array elements based on specific criteria

  Syntax
  let array = [1, 2, 3, 4]
  array.forEach(function(val){
    console.log(val)
  }) 
*/

// Example.1
const Array = [1, 2, 3, 4, 5];
Array.forEach(function (element) {
  console.log(element);
});
/* Output :
1
2
3
4
5
*/

// Example.2
const Array2 = [1, 2, 3, 4, 5];
Array2.forEach((val) => {
  console.log("Hello");
});
/* Output :
Hello
Hello
Hello
Hello
Hello
*/

// Example.3
const array1 = [1, 33, true];
array1.forEach(function (val) {
  console.log(val + 2); // will not modify original Array
});
/* Output :
3
35
3
*/

// Example.4
let arr = [1, 2, 13, 15];
arr.forEach((value) => {
  console.log("value = ", value + 2);
});
/* Output :
2
4
15
17
*/

// Example.5
const array2 = ["pune", 2, 3, 4];
array2.forEach((val) => {
  console.log(val * val);
});
/* Output :
NaN
4
9
16
*/

// Example.6
const array3 = ["pune", "chennai", "mumbai"];
array3.forEach((val, index, arr) => {
  console.log(val.toLocaleUpperCase(), index, arr);
});
/* Output :
PUNE, 0, ["pune", "chennai", "mumbai"]
CHENNAI, 1, ["pune", "chennai", "mumbai"]
MUMBAI, 2, ["pune", "chennai", "mumbai"]
*/

// Example.7
const array4 = [2, 3, 4, 5];
array4.forEach((num) => {
  console.log(num * num);
});
/* Output :
4
9
16
25
*/

// Exmaple.8 (From the given array of numbers, print the square of each value using the forEach loop)
let number = [5, 6, 7, 9];
number.forEach((num) => {
  console.log("Square =", num ** 2);
});
/* 
Output :
25
36
49
81
*/

// Example.9
let numbers = [1, 2, 3, 4, 5, 6, 7];

numbers.forEach(function (value, index) {
  console.log(`Element at ${index} : ${value}`);
});

/* Output :
Element at 0 : 1
Element at 1 : 2
Element at 2 : 3
Element at 3 : 4
Element at 4 : 5
Element at 5 : 6
Element at 6 : 7
*/

// Example.10
let num = [1, 2, 3, 4, 5];

let sum = 0;
num.forEach(function (val) {
  sum = sum + val;
  // sum += val;
});
console.log(sum); // Output: 15

// Example.11
let fruits = ["Apple", "Banana", "Mango"];
fruits.forEach((val) => {
  console.log(`I love ${val}`);
});
/* Output :
I love Apple
I love Banana
I love Mango
*/
