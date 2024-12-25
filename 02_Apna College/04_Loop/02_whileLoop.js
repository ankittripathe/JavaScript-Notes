/*  while loop => While loops allow you to repeat a block of code while a certain condition is true.
    Syntax:
    
    start
    while(end) {
    change
   } 

*/

// Example.1 (print 1 to 5)
// The condition is checked at the beginning of each iteration if condition is true, the code block is executed. If it is false, the loop exit.
let i = 1;
while (i <= 5) {
  console.log("i=", i);
  i++;
}
// output are:
// i = 1
// i = 2
// i = 3
// i = 4
// i = 5


// Exmaple.2 (print 1 to 10)
let m = 1;
while (m <= 10) {
  console.log("m =", m);
  m++;
} 
// output: m = 1 to 10


// Example.3
let a = 0;
while (a <= 5) {
  console.log("a =", a * 2);
  a++;
}
// output are:
// a = 0
// a = 2
// a = 4
// a = 6
// a = 8
// a = 10


// Example.4
let k = 0;
while (k <= 5) {
  console.log("k =", k);   // output are:- k = 1 to 5
  k++;
}
console.log(k);  // output: 6


// Example.3 (print 7 to 1)
let n = 7;
while (n >= 1) {
  console.log("n =", n);
  n--;
}
// output are:-
// n = 7
// n = 6
// n = 5
// n = 4
// n = 3
// n = 2
// n = 1


