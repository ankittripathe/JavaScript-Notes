// Example.1
let str = "JavaScripts"

console.log(str[0]); //j
console.log(str[1]); //a
console.log(str[2]); //v
console.log(str[3]); //a

console.log(str);        // output: javaScripts
console.log(str.length); // output: 11


// Example.2 (string in single quotes)
let str2 = 'Ankit'    
console.log(str2);   // output: Ankit


// Exmaple.3  (string in double quotes)
let str3 = "tripathi"
console.log(str3); // output: tripathi


// template literal
// Example.1 
let sentence = `This is special string`
console.log(sentence);         // output: This is special string
console.log(typeof sentence);  // output: string


// pratical use of back-ticks
// Example.1 
const obj = {
    item:'pen',
    price: 10
}
const output = `The cost of ${obj.item} is ${obj.price} rupees`
console.log(output);  // output: The cost of pen is 10 rupees


// Example of Escape character
// Example.1 (Next line)
let str5 = 'java\nScripts'
console.log(str5);
// output are:-
// java
// scripts


// Tab sapce
// Example.1
let string = 'Apna\tCollege'
console.log(string);        // output: Apna  college
console.log(string.length); // output: 12 (\t ko single character me count hoga)

// Exmple.2
const name = 'Ankit\tDeveloper'
console.log(name);          // output:- Ankit  Developer
console.log(name.length);   // output:- 15

