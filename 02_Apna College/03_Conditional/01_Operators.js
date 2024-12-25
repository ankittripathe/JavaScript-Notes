// (01) Arithmatic Operators 
let a = 5;
let b = 2;

console.log('a = ', a, '& b = ', b);   // output:- a = 5, b = 2
console.log(`a = ${a} & b = ${b}`);    // output:- a = 5, b = 2
// console.log('a + b = ', a + b);
// console.log('a - b = ', a - b);
// console.log('a * b = ', a * b);
// console.log('a / b = ', a / b);
// console.log('a % b = ', a % b);
console.log('a ** b = ', a ** b);  // 5^2 = 25


// (02) Unary Operator //
 let k = 5;
 let l = 2;
 console.log('k = ', k, '& l = ', l);   // output:- k = 5 &  l = 2

//! Increment operator //
 k++   // k = k + 1
 console.log('k =', k);     // output:- k = 6


 let x = 5;
 let y = 2;
 console.log('x = ', x, '& y = ', y);

//! decrement operator //
 x--  // x = x-1
 console.log('x =', x);   // output:- x = 4



// (02) Assignment operator
let m = 5;

//! case.1   (here m = 5)
m += 5;  // m = m+5
console.log('m =', m);   // output:- m = 10

//! case.2  (now m = 10)
m /= 5;  // m = m/5
console.log('m =', m);   // output:- m = 2

//! case.3 (now m = 2)
m **= 2;  // m = m**2
console.log('m =', m);   // output:- m = 4


// (03) Comparison Operator
// Example.1
let num1 = 5;
let num2 = 2;

console.log('5 == 2',  num1 == num2);  // output: false
console.log('5 != 2',  num1 != num2);  // output: true

// updation
num2 = 5;

console.log('5 == 5',  num1 == num2);  // output: true
console.log('5 != 5',  num1 != num2);  // output: false


//  Example.2
let x1 = 5;
let y1 = "5";
console.log('x1 === y1', x1 === y1);  // Notes: In strict check value & data type must be equal.
// output: false

console.log('x1 !== y1', x1 !== y1); // output: true


// Example.3
let m1 = 4;
let n1 = 2;

console.log('4 > 2',  m1 > n1);  // output: true
console.log('4 < 2',  m1 < n1);  // output: false
console.log('4 >= 2', m1 >= n1); // output: true


// (04) Logical operator

// (a) logical And (&&) operator => all condition must be true => then it will give true otherwise false
// Example.1
const a1 = 6;
const b1 = 5;

const cond1 = a1 > b1;   // true 
const cond2 = a1 === 6;  // true

console.log('cond1 && cond2 = ', cond1 && cond2);   // output: true

// Example.2
const score1 = 101
const score2 = 100
const score3 = 99

const con1 = score1 > score2  // true
const con2 = score2 > score3  // true
const con3 = score1 > score3  // true

console.log('con1 && con2 && con3 =', con1 && con2 && con3);  // output:- true

// Example.3
const answer1 = (true && false && true)
console.log('answer1 = ', answer1);  // output:- false (ek vi false huwa toh false hoga && me)

// Example.4
const answer2 = (true && true && true && true)
console.log('answer2 =', answer2);  // output:- true

// Example.5
const answer3 = (false && false && false)
console.log('answer3 =', answer3);  // output:- false

//! Working with Non-boolean
const answer4 = (true && 'ankit')
console.log('answer4 =', answer4); // outptut:- ankit


// (b) logical OR (||) operator  => if anyone condition is true it will give true.
// Example.1
const t1 = 10
const t2 = '8'

const condition1 =  t1 > t2   // true
const condition2 = t2 === 8   // false (strict check)

console.log('condition1 || condition2 =', condition1 || condition2);  // output: true

console.log('condition1 || condition2 =', t1 < t2 || t2 === 8); 
// output: false (if both condition is false then it give result false)

// Example.2
let final1 = (true || true || true)
console.log('final =', final1);  // output:- true


// Example.3
const final2 = (false || false || false)
console.log('final2 =', final2);  // output:- false

// Example.4
const final3 = (false || true || false)
console.log('final3 =', final3);  // output:- true

// Example.5
const final4 = (false || 7)  // truthy and falsey  ka use hai
console.log('final4 =', final4);  // output:- 7 (true hai but last wala print hota hai)

//! (short cicuting => agar koie ek condition true ho gaya to aage ka condition check nhi hoga ohi print ho jaega.)
// Exmple.6
const final6 = (false || 78 || 2 || 1)
console.log('final6 =', final6);  // output: 7




