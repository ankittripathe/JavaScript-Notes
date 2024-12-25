//! while loop  //
/*syntax 
while (condition){
    //code to be executed
}
*/

// Example.1
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}

// Example.2
let n = 0;
while (n < 3) {
  n++;
}
console.log("n =", n);

// Expample.3
let step = 0;
while (step < 5) {
  console.log("step", step);
  step++;
  // step +=1;
  // step = step+1;  3no line le matlab ek hi hai
}


//! do while loop
/*syntax
do{
    //code to be executed 
}
while (condition)
*/

// Example.1
let num = 2
do {
  console.log(num);
  num++;
} while (num < 6);


// Example.2
let numb = 100
do {
    console.log(numb);
    numb++ 
} while (numb < 100)      // condition true ho ya false Ek barr Execute hoga hi