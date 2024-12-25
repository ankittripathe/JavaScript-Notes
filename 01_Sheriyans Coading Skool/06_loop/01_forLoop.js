/* Types of loops
  (1) for loop 
  (2) while loop
  (3) do-While loop
  (4) for-Each loop
*/

/* (1) for loop => allows you to repeat a block of code for a specific number of times.
 There are 3 types of for loops:
 (a) standard for loop 
 (b) for-in loop
 (c) for-of loop
*/

/* (1) standard for loop Syntax
   for (initialization; condition; increment/decrement){
    /// code to be executed
  } 

   Another Syntax
   for (start; end; change){
    /// code to be executed
  }
*/


// Example.1 (print 1 to 10)
for (let i = 1; i<11; i++) {
  console.log('i =', i);
}


// Example.2 (print 25 to 50)
for (let num = 25; num <= 50; num++) {
    console.log('num =', num);
}

// Example.3 (print 20 to 5) 
for (let i = 20;  i>4; i--) {
    console.log("i =", i);  
}


// Example.4 (print 5 to 1)
for (var num = 5; num >= 1; num--) {
    console.log('num =', num);
}


// Example.5
let sum = 0
for (let i = 1; i <= 5; i++) {
  console.log("i =", i);
  sum = sum + i
  console.log(sum);
}
console.log("total sum =", sum);



