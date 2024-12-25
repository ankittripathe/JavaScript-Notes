/* Variable Rules
   (1) Began with only letter(a-z or A-Z), underscore(_), or dollar($).
   Example:-
   let name    // valid
   let Name    // valid
   let _name   // valid
   let $name   // valid
 
   (2) Names cannot begin with a number
   Example:-
   let 1ankit    //  not valid
   let 2Ankit    // not valid

   (3) Names are case-sensitive. ankit and ANKIT are treated as different identifiers.
   Example:-
   let ankit   // valid
   let ANKIT   // valid

   (4) Names cannot be JavaScript reserved keywords :- let, const, var, if, else, function, etc.

   (5) Names cannot include spaces.

   (6) It’s not a rule but a best practice to use descriptive and meaningful names for variables.
   Example:-
   let x = 10;           // Avoid
   let userAge = 10;     // Prefer

   (7) special characters like @, #, %, etc., are not allowed.
*/

const name = "krissh";
console.log(name);       

const _name = "G.one";
console.log(_name);

const $name = "shaktimaan";
console.log($name);

const name123 = 'Sachin'
console.log(name123);


// both have same keywords but are case sensitive.
const firstname = "Hanumaan";
console.log(firstname); // case sensitive

const FIRSTNAME = "Ram";
console.log(FIRSTNAME); // case sensitive
