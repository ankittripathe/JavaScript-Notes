// 03 ternary operator => is a shorthand way to write an if-else statement in JavaScript. It takes the form of condition ? value1 : value2, where condition is a boolean expression, and value1 and value2 are expressions of any type. If condition is true, the ternary operator returns value1; if condition is false, it returns value2.


// Example.1 (if 12 > 3 bada hai then print say Hello otherwise print say Hey)
12>3 ? console.log('cond is true => say Hello'): console.log('cond is false => say Hey');
// output: say Hello


// Example.2
let num = 12 > 3 ? 'true':'false';
console.log(num); // output: true


// Example.3
let x = 10;
let y = 20;
let max = (x > y) ? x : y;
console.log(max); // Outputs: 20


// Example.4
let a = 100;
let b = 50;
let result = (a > b) ? 'condition => true' : 'condition => false'
console.log(result);  // output: condition => true

