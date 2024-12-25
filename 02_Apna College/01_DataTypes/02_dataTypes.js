/* Primitive Data types:- primitive data types are immutable cant't be changed. They are stored directly in the memory, and operations on them typically produce a new value rather than modifying the original one.
   1. String
   2. Number
   3. Boolean
   4. undefined
   5. null
   6. BigInt
   7. Symbol
*/

// (1) Number
let age = 24;
console.log(age); // output:- 24
console.log(typeof age); // output:- number

// (2) string
let name = "Ankit";
console.log("name =", name, "& type =", typeof name); // output:- name = Ankit & type = string

// (3) boolean
let isFollow = true;
console.log(isFollow); // output:- true
console.log(typeof isFollow); // output:- boolean

// (4) undefined
let college;
console.log(college); // output:- undefined
console.log(typeof college); // outpt: undefined

// (5) null
let percentage = null;
console.log(percentage); // output:- null
console.log(typeof percentage); // output:- object

// (6) BigInt
// Example.1
let x = BigInt("123");
console.log(x); // output:- 123n
console.log(typeof x); // output:- bigint

// Example.2
let k = BigInt(22);
console.log(k); // output:- 22n
console.log(typeof k); // output:- bigint

// (7) Symbol
let y = Symbol("Hello");
console.log(y); // output:- Symbol(Hello)
console.log(typeof y); // output:- symbol

// printing all in oneTime
console.log(age, name, isFollow, college, percentage, x, y);
console.log(
  typeof age,
  typeof name,
  typeof isFollow,
  typeof college,
  typeof percentage,
  typeof x,
  typeof y
);

// Printing all in Table form
console.table([age, name, isFollow, college, percentage, x, y]);
console.table([
  typeof age,
  typeof name,
  typeof isFollow,
  typeof college,
  typeof percentage,
  typeof x,
  typeof y,
]);
