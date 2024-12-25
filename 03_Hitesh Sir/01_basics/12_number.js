// demo
const score = 400
console.log(score);             // output: 300
console.log(typeof score);      // output: number


//Example.1 
const balance = new Number(200)       // 100% guarantee hai ki E wala number hi hoga ab.
console.log(balance);                 // output: [Number: 200]
console.log(typeof balance);          // output: object


// Method.1
console.log(balance.toString());         // pahle object tha ab string me convert ho gaya.
console.log(typeof balance.toString());  // ouput: string (me change ho gaya)

console.log(balance.toString().length);  // output: 3
console.log(balance.toFixed(2));         // output: 200.00    ( decimal ke badd 2 zero )
console.log(balance.toFixed(1));         // output: 200.0     ( decimal ke badd 1 zero )


// Method.2
let demo  = balance.toString()
console.log(demo);                 // output: 200
console.log(typeof demo);          // output: string


// Example.2
const otherNumber = 123.8966
console.log(otherNumber.toPrecision(3)); // output: 124  (range between 1-21 ke bich me de skte hai) 
console.log(otherNumber.toPrecision(4));  // output: 123.9
console.log(otherNumber.toPrecision(2));  // output: 1.2e+2 (exponential me aaega)
console.log(otherNumber.toPrecision(5));  // output: 123.90


// Example.3
const hundreds = 1000000
console.log(hundreds.toLocaleString());    
console.log(hundreds.toLocaleString('en-IN'));  // output:- 10,00,000  (comma laga ke aaega value)