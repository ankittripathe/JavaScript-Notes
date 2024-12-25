/* (2) while loop => While loops allow you to repeat a block of code while a certain condition is true.
    Syntax:
    
    start
    while(end) {
    change
} 

*/

// Example.1 (print 1 to 10)
// The condition is checked at the beginning of each iteration and if it is true, the code block is executed. If it is false, the loop exits

let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}

// Example.2 (print 45 to 32)
let num = 45;
while (num >= 32) {
  console.log("num =", num);
  num--;
}

// Example.3 (print 12 to 1)
let n = 12;
while (n >= 1) {
  console.log("number =", n);
  n--;
}
