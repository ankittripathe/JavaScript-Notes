/*syntax 
function myFunction(){
    //code
}  
*/

// Example.1
let p1 = 10;
let p2 = 10;
function myFunction(p1, p2) {
  return p1 * p2;
}
console.log("Output ", myFunction(p1, p2));
// console.log(myFunction(5, 5));


// Example.2
let x = 4;
let y = 3;
function myfunction(x, y) {
  return x * y; // Function returns the product of a and b
}
console.log("Output ", myfunction(x, y));


// Example.3
let a = 1;
let b = 2;
let c = 3;
function Avg(x, y) {
  console.log("Done");
  return (x + y) / 2;
}
console.log("Average of a and b is =", Avg(a, b));
console.log("Average of b and c is =", Avg(b, c));
console.log("Average of a and c is =", Avg(a, c));


// Example.4 (round off kaise krte hai )
// let a = 1;
// let b = 2;
// let c = 3;

function Avg(x, y) {
  console.log("Done");
  return Math.round((x + y) / 2);
}
console.log("Average of a and b is =", Avg(a, b));
console.log("Average of b and c is =", Avg(b, c));
console.log("Average of a and c is =", Avg(a, c));

// Example.5
const sum = (p, q) => {
  return p + q;
};
console.log(sum(7, 3));

let result = sum(1, 6);
console.log(result);
