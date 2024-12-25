/* Conditional Statement */

//! (01) if statement //
let Age = 24;
if (Age >= 18) {
  console.log("You Can Vote");
}
// output: You Can Vote

//! (02) if-else statement //
// Example.1
let modes = "blue";
let colors;

if (modes == "dark") {
  colors = "black";
} else {
  colors = "white";
}
console.log(colors); // output: white

// Example.2
let age1 = 25;
if (age1 >= 18) {
  console.log("You Can Vote");
} else {
  console.log("You Can't Vote");
}
// output: You Can Vote

// Example.3
let name = "Gorakhpur";
if (name === "Bhairahwa") {
  console.log("Your City");
} else {
  console.log("Sorry Not Your City");
}
// output: Sorry Not Your City

// Example.4 (Find odd or Even number)
let num = 10;
if (num % 2 === 0) {
  console.log(num, "is Even number");
} else {
  console.log(num, "is Odd number");
}
// output: 10 is Even number

//! (03) else-if Statement //
// Example.1
let mode = "blue";
let color;

if (mode === "dark") {
  color = "black";
} else if (mode === "pink") {
  color = "pink";
} else if (mode === "blue") {
  color = "blue";
} else {
  color = "white";
}
console.log(color); // output:  blue

// Example.2
let ages = 99;
if (ages < 18) {
  console.log("Junior");
} else if (ages >= 60) {
  console.log("Senior");
} else {
  console.log("Middle");
}
// output: Senior

// Example.3
let age = 10;
if (age < 18) {
  console.log("You are Junior");
} else if (age >= 60) {
  console.log("Senior citizen");
} else {
  console.log("Middle citizen");
}
// output: You are Junior

//! (04) Nested else-if statement
// Example.1
const number = 3;
const ageIs = 19;

if (number === 1) {
  console.log("A");
} else if (number === 2) {
  console.log("B");
} else if (number === 3) {
  if (ageIs > 18) {
    console.log("You Can Vote");
  }
  console.log("C");
} else if (number === 4) {
  console.log("D");
} else {
  console.log("F");
}
// output are:-
// You can vote
// C
