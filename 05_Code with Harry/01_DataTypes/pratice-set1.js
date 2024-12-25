// Chapter 1

// (1) Create a variable of type string and try to add a number to it.
let a = "Ankit";
let b = 7;
console.log(a + b); // output: Ankit7


// (2) Use type of operator to find the datatype of the string in last question.
console.log(typeof (a + b)); // output: string



// (3) Create a const object in javaScripts can you change it to hold a number later?
const item = {
  name: "Ankit",
  age: 22,
  isPrincipal: false,
};

// This is allowed
item.age = 24; // Changing the value of the 'age' property
console.log(item);

// This is not allowed
// item = 50;             // Error: Assignment to constant variable



// (4) Try to add new key to the const object in problem 3 were you able to do it ?
item.married = false; // adding new key value pair
item["friend"] = "Ekta";
console.log(item);



// (5) Write a js program to create word-meaning dictionary of 5 words
const dict = {
  appreciate: "recognize the full worth of",
  love: "felling or showing",
};
console.log(dict.love);
console.log(dict["love"]); // can access by both way
