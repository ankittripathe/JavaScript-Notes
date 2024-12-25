//!  Array //
// Example.1
const myArray1 = [99, 1, 2, 3, 88, 5];
console.log(myArray1);             // output: [ 99, 1, 2, 3, 88, 5 ]
console.log(myArray1[0]);          // output: 99
console.log(myArray1[1]);          // output: 1
console.log(typeof myArray1);      // output: object


// Exmaple.2
const myHeros = ["shaktimaan", "Marvel", "Naagraj"];
console.log(myHeros);           // output: [ 'shaktimaan', 'Marvel', 'Naagraj' ]


// Example.3
const myArray3 = new Array(1, 2, 3, 7);
console.log(myArray3[1]);       // output: 2
console.log(typeof myArray3);   // output: object


// Example.4
const myArray2 = [99, 44, "shaktimaan", 9, "Shyam"];
console.log(myArray2);           // output: [99, 44, "shaktimaan", 9, "Shyam"];
console.log(myArray2[4]);        // output: shyam
// console browser me dekenge toh waha Prototype milta hai Array me vii.


// overWrite
myArray2[2] = "Gita";
console.log(myArray2);      // output: [ 99, 44, 'Gita', 9, 'Shyam' ]


// adding new key value pair
myArray2[7] = "jeevan"; 
console.log(myArray2);     // output: [ 99, 44, 'Gita', 9, 'Shyam', <2 empty items>, 'jeevan' ]

myArray2[5] = function () {};
console.log(myArray2);    
// output:[ 99, 44, 'Gita', 9, 'Shyam', [Function (anonymous)], <1 empty items>, 'jeevan' ]



/*
Notes:
()  paranthesis
[]  bracket
{} braces / cury braces
*/


