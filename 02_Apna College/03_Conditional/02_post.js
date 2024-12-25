// (1) Post-Increment (a++)
let a = 5;
let b = 7
console.log('a =', a, '& b =', b);  // output: a = 5, b = 7

console.log('a++ =', a++);   // output: a++ = 5
// Reason:-This operator first returns the current value of a and then increments it.
// a++ prints the current value of a (which is 5), and then increments a to 6.

console.log('a =', a); // output:- 6


// (2) Post-decrement (a--)
let x = 11;
let y = 5
console.log('x =', x, '$ y =', y);

console.log('x-- = ',x--);  
// output:- 5 ( reason:-This operator first returns the current value of x and then decrement it ). a-- print the current value of x (which is 11). And then decrement it to x = 10

console.log('x = ', x);  // output:- 10


// Example.1
let num1 = 7
console.log('num1 =', num1)       // output:- num1 = 7

console.log('num1++ =', num1++);  // output:- num1++ = 7
console.log(num1);                // output:- num1 = 8


// num1 = 8 (now the final value of num1 = 8)
console.log('num1-- =', num1--);  // output:- 8
console.log(num1);                // output: 7