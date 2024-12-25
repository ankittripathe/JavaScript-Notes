/* do-While loop => do while loop execute at least once either condition is ture or false */
// Notes: do while loop execute at least one time either condition is ture or false.

// Example.1
let i = 1;
do {
  console.log("Ankit");
  i++;
} while (i <= 5);
// output are:-
// Ankit
// Ankit
// Ankit
// Ankit
// Ankit


// Example.2
let m = 11;
do {
  console.log("Roll No=", m);  // output:- m = 11
  m++;
} while (m <= 10); // Executed only once bcz condition is false.



// Example.3
var score = 100;
do {
  console.log(`Score = ${score}`);  // output: Score = 100
  score++;
} while (score <= 10);



// Example.4
var score = 1;
do {
  console.log(`Score = ${score}`);
  score++;
} while (score <= 5);
// output are:-
// Score = 1
// Score = 2
// Score = 3
// Score = 4
// Score = 5



