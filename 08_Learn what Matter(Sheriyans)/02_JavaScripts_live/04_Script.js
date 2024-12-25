// !   Conditionals - if else,  else-if, Ternary Operator
/*
  Conditinal me do hi value aati hai ya toh true ya toh false. Eske 3 scenerio bante hai.
  1) Hum directly true, false likhenge.
  2) kuch aaise likho jo convert ho jaye true or false me for Eg. 12 > 4 => true
  3) truthy aur falsy value.
  ? falsy value => 0, false, "", undefined, null, NaN, document.all
  Eske alawa sari truty value hai.
*/

//! 01) if-else 
// Example.1
if (true) {
  console.log("Condition is true");
} else {
  console.log("Condition is false");
}

// Example.2
if (12 < 4) {
  console.log("Hello condition is true");
} else {
  console.log("Hey condition is false");
}

// Example.3
if ("") {
  console.log("Truthy value");
} else {
  console.log("falsey value hai");
}

// Example.4
if ("haramzada") {
  console.log("Condtion is ture so => truthy value ");
} else {
  console.log("error");
}


//! 02) if-else else-if
if (5 < 3) {
  console.log("cond-1");
} else if (1 > 2) {
  console.log("cond-2");
} else if (4 > 3) {
  console.log("cond-3");
} else {
  console.log("hello");
}


//! 03 ternary operator
// Agar 12 , 3 se bada hai toh print hello nhi toh print hey.

// Example.1
12>3 ? console.log('True: Hello'): console.log('False: Hey');

// Example.2
let num = 12>3 ?'True':'False';
console.log(num);