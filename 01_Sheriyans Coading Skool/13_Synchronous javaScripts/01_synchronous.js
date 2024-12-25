/* (1) synchoronous javaScripts:- Stored in Call stack (Main stack)
    :- Synchronous one after one, jab tak Ek complete na ho, dusra shuru nhi hoga.
    :- tasks are executed one after another, blocking the execution of the next task until the current  task is completed.
    :- This is also referred to as blocking code.
    :- Stored in Call stack (Main stack)
*/
// Example.1
console.log("Start");     // synchronous code
console.log("Middle");    // synchronous code
console.log("End");       // synchronous code

