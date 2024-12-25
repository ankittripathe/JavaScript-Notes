//! Ternary Operator 
/* Ternary operator:
 Ternary Operator, also known as the Conditional Operator, offers a better approach to expressing conditional (if-else) statements. It operates on three operands: a condition, a value to return if the condition is true, and a value to return if the condition is false.

Syntax
condition ? trueExpression : falseExpression
*/

// Exmple.1
let adult = (20 > 18) ? "Yes" : "No";
console.log(adult);


// Example.2
const teaPrice = (100 <= 80) ? "More than 80" :"less than 80";
console.log(teaPrice);


// Example.3
let age = 22
let final = age >= 18 ? 'You Can Vote' : 'You can not Vote'
console.log(final);


// Example.4
100 >= 101 ? console.log('true'): console.log('false');

