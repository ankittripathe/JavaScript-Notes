// Example.1
const a = 13;
const b = 7;
sumOfTwoNum(a, b); // hoisting is allowed in normal function

function sumOfTwoNum(a, b) {
  const sum = a + b;
  console.log("Result =", sum);
}

// Example.2
function sumOfTwoNum(a, b) {
  const sum = a + b;
  console.log("Result =", sum);
}
sumOfTwoNum(20, 30);

// Example.3
function addNum(a, b) {
  const sum = a + b;
  console.log("Result:", sum); // output: 10
}
const final = addNum(7, 3); // function calls here
console.log(final); // undefined because function is not return type.

// Example.4
function plus(num1, num2) {
  const sum = num1 + num2;
  console.log("Result =", sum);
  return sum;
}
const num1 = 77;
const num2 = 3;
const result = plus(num1, num2);
console.log("return something =", result);

// Example.5
function multiply(a, b) {
  console.log(a * b);
  return a * b;
}
// let res = myFun()           // print NaN because anything is not assign here.
let res = multiply(""); // NaN
console.log(res);

// Example.6
function sayNum(num) {
  console.log(num);
  return num;
}
// let ans = sayNum()         // print undefined because anything is not assign here.
let ans = sayNum(""); // vacent string assign will gives output => vacent.
console.log(ans);

// Example.7
let x = 4;
let y = 3;
function multiplyNum() {
  return x * y;
}
console.log(multiplyNum(x, y));

// Example.8
function sayMyName() {
  console.log("Ankit");
  console.log("Tripathi");
}
// sayMyName()
let Result = sayMyName(); // variable me vi store  kr ke peint kr skte hai just like this line.
console.log(Result);

// Example.9
function addTwoNumber(n1, n2) {
  console.log(n1 + n2);
}
const answer = addTwoNumber(30, 5);
console.log(answer);

// Example.10
function addTwoNumbers(number1, number2) {
  console.log(number1 + number2);
  return number1 + number2;
  // console.log("Leo"); // return ke badd koie vi line execute nhi hota hai.
}
const results = addTwoNumbers(3, 5);
console.log(results); // return wala value print krega.



