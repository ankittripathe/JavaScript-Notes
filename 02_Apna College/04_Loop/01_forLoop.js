/* Loop => Are used to execute a piece of code again & again */
// (01) for-loop

/* (1) standard for loop Syntax
   for (initialization; condition; increment/decrement){
    /// code to be executed
  } 

   Another Syntax
   for (start; end; change){
    /// code to be executed
  }
*/

// Example.1 (print 1 to 5)
for (let i = 1; i <= 5; i++) {
  console.log(i, "Apna college"); // Executed 5 times
}
console.log("loop has ended");

// Example.2 (calculate Sum of 1 to n)
let sum = 0;
for (let i = 1; i <= 5; i++) {
  sum = sum + i;
  // console.log(sum);
}
console.log("sum =", sum);     // output:- 15
console.log(`sum = ${sum}`);   // output:- 15


// Example.3
for (let i = 1; i <= 5; i++) {
  console.log(i, "JavaScripts");    // Executed 5 times
}
// console.log(i);  // will not execute because it is blocked scope (block ke ander hi hoga jo hoga)


// Example.4
for (var i = 1; i <= 5; i++) {
  console.log("i =", i);
}
console.log(i); // Remember: Var are global Scoped so it will print 6 ass well.

/* Notes: 
 (1) Local variables are variables that are declared inside of a function or loop. Since they are declared inside of the function, they belong only to that one function and no other functions.

 (2) Local variables have Function Scope: They can only be accessed from within the function.

*/


// Example.5  (print 20 to 10)
for(let k = 20; k >= 10; k--){
    console.log('hello', k);
}

// Example.6 (print 20 to 5) 
for (let i = 20;  i > 4; i--) {
    console.log("i =", i);  
}




