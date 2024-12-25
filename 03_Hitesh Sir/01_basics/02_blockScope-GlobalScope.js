//! Block scoped:- let, const follow block scoped. It is only accessible within the block in which it is declared.
// Example.1
{
  let x = 10;
  console.log(x); // Output: 10
}
// console.log(x); // Error: x is not defined
// Here, x is declared with let inside the block { }. It cannot be accessed outside this block.

// Example.2
{
  const y = 20;
  console.log(y); // Output: 20
}
// console.log(y); // Error: y is not defined


// Example.3
for (let i = 0; i < 3; i++) {
  console.log(i); // Output: 0, 1, 2
}
// console.log(i); // Error: i is not defined


// Example.4
let player = "Dhoni";
{
  let player = "Raina";
  console.log(player); // output: Raina
}
console.log(player); // output: Dhoni


// Example.5
const number = 7;
{
  const number = 77;
  console.log(number); // output:- 77
}
console.log(number); // output:- 7


//! global Scope:- var follow global scope.
// Example.1
if (true) {
  var name = 'Ankit';
  console.log(name); // output:- Ankit
  
}
console.log(name);   // output: Ankit (accessible because `var` is not block-scoped)


// Example.2 
console.log(a); // output: undefined (variable `a` is hoisted but not initialized)
var a = 50;
console.log(a); // output: 50


// Example.3
var myLaptop = "Acer";
{
  var myLaptop = "MSI"; // output :- MSI
}
{
  var myLaptop = "mackbook";
  console.log(myLaptop); // output :- mackbook
}
console.log(myLaptop);  // output :- mackbook  (because of var => global scope)

// output are :-
// MSI
// mackbook
// mackbook
