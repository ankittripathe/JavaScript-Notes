// Types of Error

// (1) Compile time Error:- code execute krne se pahle pata chal jata hai parsing time pe
// Syntax Error:-
// console.log('hello'

// (2) Run Time Error:- code execute krne pe pata chlat hai ki error hai
// Reference error:-
// console.log(x);

// (3) Error Handling:-
// Example.1
const a = 5;
const b = 10;

try {
  console.log("try block starts here");
  console.log("a + c =", a + c);
  // error aane ke badd sidhe catch block me chala jaega error print krne
  console.log("try block ends here");
} catch (err) {
  console.log("I am inside Catch Block");
  console.log("Your Error is here =", err);
}

// Example.2
try {
  console.log("try block ke ander hu");
  // error -> reference error
  console.log(x);
} catch (error) {
  console.log(error);
} finally {
  console.log("I will run everytime, as i am finally block");
}

//! Let's create a custom error
try {
  // refernce error
  console.log(x);
} catch (err) {
  throw new Error("Bhai phale declear kro tab print karna");
}
