/* Rest Operator (...):-
   --> Used to collect multiple elements into a single array or object.
   --> It works in function parameters or destructuring assignments.

   Use Cases:-
   --> Gathering function arguments into a single parameter.
   --> Destructuring objects or arrays to extract remaining elements.
 */

//! Array Destructuring
// Example.1
let array1 = [1, 2, 3, 4, 5];
let [firstOne, secondOne, ...rest] = array1;

console.log(firstOne); // output:- 1
console.log(secondOne); // output:- 2
console.log(rest); // output:- [3, 4, 5]

// Example.2
const [first, ...restOperator] = [1, 2, 3, 4];
console.log(first); // output:- 1
console.log(restOperator); // output:- [2, 3, 4]

//! Object Destructurig
const person = {
  name: "John",
  age: 30,
  city: "New York",
};

const { name, ...details } = person;
console.log(name);      // output: John
console.log(details);   // output: { age: 30, city: 'New York' }


//! function Arguments
function firstAndRest(first, ...rest) {
  console.log('First =', first);
  console.log('Rest =', rest);
}
firstAndRest(10, 20, 30, 40); 
// output:
// First = 10
// Rest = [20, 30, 40]

function number(a, b, ...c){
  console.log('a =', a);
  console.log('b =', b);
  console.log('c =', c);
}
number(1, 2, 3, 4, 5)
// output:- 
// a = 1
// b = 2
// c = [3, 4, 5]

