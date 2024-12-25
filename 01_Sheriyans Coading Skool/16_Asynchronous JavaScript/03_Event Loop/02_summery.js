/* (1) synchoronous javaScripts:- Stored in Call stack (Main stack)
    :- Synchronous ka matalab Ek ke baad Ek, jab tak Ek complete na ho, dusra shuru nhi hoga.
    :- tasks are executed one after another, blocking the execution of the next task until the current  task is completed.
    :- This is also referred to as blocking code.
    :- Stored in Call stack (Main stack)
*/
// Example
console.log("Start");
console.log("Middle");
console.log("End");


/* (2) asynchronous javaScripts:- Store in Task queue (Side stack)
   :- asynchronous means saare kaam Ek saath shuru krdo, jiska answer pahle aajaye usko print krdo.
   :- asynchronous allows tasks to run in parallel or after a delay, without waiting for the previous task to finish.
   :- This is also referred to as non-blocking code.
   :- asynchonous ka main motive hota hai ki us cases mein jinka hame pata nhi hai ki code ka answer ka aagega us case me use hota hai asynchronous javaScripts.

   They all are asynchronous JavaScript
   :- setTimeout
   :- setinterval
   :- promises
   :- fetch()
   :- axious
   :- XMLHttpRequest
*/
// Example.
setTimeout(() => {
    console.log("Middle");
}, 2000); // Executes after 2 seconds


// ***************************************************************
console.log("synchronous task-1"); // synchronous => stored in Main stack (call stack)
console.log("synchronous task-2"); // synchronous => stored in Main stack (call stack)

setTimeout(() => {
  console.log("async task-1"); // asynchronous => stored in Side stack (task queue)
}, 1000);

console.log("hello!"); // synchronous => stored in Main stack

setTimeout(() => {
  console.log("async task-2"); // asynchronous => stored in Side stack (task queue)
}, 0); // delay = 0 ms


// Notes: Jab saare synchronous code execute ho jata hai tab call stack(Main stack) khali hota hai. tab us time side stack(task queue) se asynchronous code ko bheja jata hai call stack me.
