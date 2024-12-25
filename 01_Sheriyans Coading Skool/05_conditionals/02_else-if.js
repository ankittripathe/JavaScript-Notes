// 02 if-else else-if => else if statement to specify a new condition if the first condition is false.
// The "if-else else-if" is a control structure in JavaScript that allows you to execute a different block of code depending on multiple conditions. It is called a ladder because it consists of multiple "if" and "else" statements arranged in a ladder-like fashion.

/* Syntax
if (condition1) {
   ? block of code to be executed if condition1 is true
} else if (condition2) {
   ? block of code to be executed if the condition1 is false and condition2 is true
} else {
   ? block of code to be executed if the condition1 is false and condition2 is false
}
*/

// Example.1
if (5 < 3) {
  console.log("cond-1 => true");
} else if (1 > 2) {
  console.log("cond-2 => true");
} else if (4 > 3) {
  console.log("cond-3 => true");
} else {
  console.log("hello");
}
// output: cond-3 => true


// Example.2
if (12 > 4) {
  console.log("cond1 => true");
} else if (12 > 5) {
  console.log("cond2 => true");
} else if (12 > 6) {
  console.log("cond3 => true");
} else {
  console.log("this condition is true");
}
// output: cond1 => true  (Jaha pe condition true huwa uske badd ka code check hi nhi hoga)


// Example.3
let x = 10;
if (x > 15) {
  console.log("x is greater than 15");
} else if (x > 10) {
  console.log("x is greater than 10 but less than or equal to 15");
} else if (x > 5) {
  console.log("x is greater than 5 but less than or equal to 10");
} else {
  console.log("x is less than or equal to 5");
}
// output: x is greater than 5 but less than or equal to 10
