// eval => The eval() function in JavaScript takes a string as input and executes it as JavaScript code.
// Example.1
console.log(eval("2 + 3"));          // outputs: 5
console.log(eval("Math.sqrt(16)"));  // outputs: 4

// Example.2
let currentDisplay = "10 + 5";
console.log(currentDisplay); // output: 10 + 5

let store = currentDisplay = eval(currentDisplay); 
console.log(store);          // output: 15


