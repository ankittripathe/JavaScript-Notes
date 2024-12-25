// Example.1
function one() {
  let username = "Ankit";
  // console.log(this.username);            // undefined
  // console.log(this);                     // object global
}
// one()

// Example.2
const two = function () {
  let username = "Ankit";
  console.log(this.username); // undefined
  console.log(this); // object global
};
// two()

// Example.3 (fat arrow function)
const chai = () => {
  let username = "Ankit";
  console.log(this.username); // undefined
  console.log(this); // {}
};
// chai();

/*Notes
 (1) Regular function & arrow function me => console.log(this.username) krne pe => undefined aa rha hai.
 (2) Regular function me => console.log(this) krne pe global object aa rha hai.
 (3) Arrow function me console.log(this) krne pe => ( node environment me => empty object {}.
    And console browser me => window object {}
*/

/* Syntax of Arrow function
   () => {}
*/

// Example.1
const addTwoNumber = (num1, num2) => {
  return num1 + num2;
};
console.log(addTwoNumber(10, 10)); // output:- 20

/*  Another ways to use Arrow function > implicit return 
    implicit return me paranthesis nhi use krna hota hai 
    syntax of implicit return 
    () => 
*/

// Example.1
const addTwoNum = (num1, num2) => num1 + num2; // implicit me return nhi likhna padega o assume kr lega.
console.log(addTwoNum(200, 200)); // output:- 400

/*
notes:(1).curly bracket me hoga toh return likhna padega function call ke liye .
          const addTwoNumber = (num1, num2) => {
           return num1 + num2;
         }
        console.log(addTwoNumber(10, 10))

       (2).Aur Implicit function me curly bracket ke jagah ( ) use hoga yaha return nhi krna padega 
          o apne se  mann lega
          //demo
          const addNum = ()=>  console.log((num1, num2))
          addNum(10, 19)

*/

// Example object type huwa toh ({})bracket ke ander dall denge implict function me
const addTwo = () => ({ username: "Ankit" });
console.log(addTwo()); // output:- { username: 'Ankit' }
