//! In JavaScript, variables are used to store data values. You can declare variables using the keywords var, let, or const.

/* (1) const :-
   Introduced in ES6 (2015).
   Block-scoped.
   Cannot be re-assigned/re-decleared.
*/
const userId = 5;
// const userId = 14    // const can't be re-decleared
// userId = 66;         // const can't be updated
console.log(userId); // output: 5

// Example.1 (block scope)
{
  const message = "Hello, inside the block!";
  console.log(message); // Output: Hello, inside the block!
}
// console.log(message); // Error: message is not defined



/* (2) let :-
   Introduced in ES6 (2015).
   Block-scoped.
   Can't be re-declared but can be updated.
*/

let userEmail = "ankit@gamil.com";
// let userEmail = 'tonny@gmail.com'  // let can't re-decleared
userEmail = "dhoni@gmail.com"; // let can be updated
console.log(userEmail); // output: dhoni@gmail.com

// Example.1 (block scope)
{
  let message = "Hello, inside the block!";
  console.log(message); // Output: Hello, inside the block!
}
// 'message' is not accessible outside the block.
// console.log(message); // Error: message is not defined



/* (3) var :-
   The oldest way to declare variables.
   Function-scoped.
   Global Scope
   Can be re-declared and updated.
*/
var user = "Ankit";
var user = "Ram"; // can be re-decleared
user = "tiger"; // can be updated
console.log(user); // output: tiger

// Example.1 (var:- follow global scope)
var bike = "Bullet";
{
  var bike = "Yamaha";
  console.log(bike);
}
console.log(bike); // Output: yamaha
console.log(bike); // Output: yamaha
console.log(bike); // Output: yamaha

/* Remember:-
  (1) keyword:- Which have some meaning in javaScripts.
      Example:- let, var, const, if, else, while, continue, break, etc

  (2) Word:- Which does not have any meaning in javaScripts.
      Example:- chacha, userName, mango, age, name, city, milk, etc

  (3) let name = 'Ankit;
      leftHand side is de-claration
      rightHand side is Initalization

  (4) prefer not to used var because of issue in (block scope & functioanal scope)

  (5) {
       console.log(this is block scope)
      }
 */



// (4) Can declare without keword
userCity = "chennai";
userCity = "lucknow"; // can update value as well
console.log(userCity); // output: lucknow



// (5) Can declare without initialization.
let userState;
console.log(userState); // output: undefined
console.log(typeof userState); // output: undefined

// All output are here :-
console.log(userId); // output: 5
console.log(userEmail); // output: dhoni@gmail.com
console.log(user); // output: tiger
console.log(userCity); // output: lucknow
console.log(userState); // output: undefined

// Another method jisme sara ek sath print ho jaega.
console.log(userId, userEmail, user, userCity, userState);

// Print outputs in Table form
console.table([userId, userEmail, user, userCity, userState]);
