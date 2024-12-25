/* Conditional Statements
   (1) if-else  
   (2) else-if
   (3) Ternary Operator
   (4) Switch case
*/

/*
  Conditinal me do hi value aati hai ya toh true ya toh false. Eske 3 scenerio bante hai.
  1) Hum directly true, false likh dee.
  2) kuch aaise likho jo convert ho jaye true or false me
  ? Example  12 > 4 => true  or  12 < 4 => false
  3) Ya phir truthy aur falsy value ho
  ? falsy value => false, -false, 0, -0, "", undefined, null, NaN, document.all
  Eske alawa sari truty value hai.
  ? truthy value => true, -true, 1, -1, 'Ankit', "  ", etc
*/

/*  (1) if-else =>
    'if' statement in JavaScript is used to execute a block of code if a certain condition is true.
    'else' is used to execute a block of code if the condition is false.
    
    Syntax
    if(condition){
       ? code to be executed if condition is true
    } else {
       ? code to be executed if condition is false
    }
*/

// Example.1
if (true) {
  console.log("true => true");
} else {
  console.log("true => false");
}
// output: true


// Example.2
if (-true) {
  console.log("-true => true");
} else {
  console.log("-true => false");
}
// output: true


// Example.3
if (12 > 4) {
  console.log("12 > 4 => true");
} else {
  console.log("12 > 4 => false");
}


// Example.4
if ("haramjada") {
  console.log("Condtion is ture so => truthy value ");
} else {
  console.log("error");
}

// Example.5
let x = 10;
if (x > 5) {
  console.log("x is greater than 5");
} else {
  console.log("x is not greater than 5");
}

// Example.7
if (12 < 4) {
  console.log("12 < 4 => true");
} else {
  console.log("12 < 4 => false");
}

// Example.8
if ("") {
  console.log("Truthy value");
} else {
  console.log("falsey value hai");
}

// Example.9
if (undefined) {
  console.log("undefined => true");
} else {
  console.log("undefined => false");
}

// Example.10
if (null) {
  console.log("null => true");
} else {
  console.log("null => false");
}
