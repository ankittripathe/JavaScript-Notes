// (1)  What will the folllowing print in javascrips?
// console.log("har\"".length)

let str ="har\""
console.log(str.length);  // output: 4
console.log(str);


// (2) Explore the includes, startWith ? endsWith functions of a string
// includes() => this method returns true if a string contains a specified string Otherwise it returns false
let text = "Hello world, welcome to the universe.";
console.log(text.includes("world")); 

console.log(text.includes("world", 6)); 

console.log(text.includes("world", 10)); 

console.log(text.includes("world", 6, 10));  // startwith and endwith

console.log(text.includes("world", "universe")); 



// (3) Write a program to convert a given string to lowercase
let name = "I LOVE PROGRAMMING"
console.log(name.toLowerCase());

// (4) Extract the amount out of this string "please give Rs 1000"
let str1 = "Please give Rs 1000"
console.log(str1.slice(15));


// (5) Try to Change 4th character of a given string were you able to do it ?
let friend = "Rasmika"
friend[3] = "E"
console.log(friend);     

// Notes: String is immutable. So here we can't assign or change the value in existing String