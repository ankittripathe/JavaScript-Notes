// (1) Arithmatic Opertaor 
let firstNumber = 3;
let secondNumber = 7;
let results = firstNumber + secondNumber;
console.log(results);       // output: 10

// increment ++
results++      //  results = results+1
console.log(results);     // output: 11


// (2) comparison operator
let one = 3;
let two = 3;
let final = one == two;
console.log(final);   // output: true


// (3) logical operator
// (a) logical And(&&) => both condition must be true.
let number1 = true;
let number2 = true;
let finalNumbers = number1 && number2
console.log(finalNumbers);    // output: true

//(b) logical OR(||) => any one condition is true then code will executed.
let num1 = true;
let num2 = false;
let finalNumber = num1 || num2
console.log(finalNumber);   // output: true

// Logical Not 
console.log(!num1);    // false  
console.log(!num2);    // true
