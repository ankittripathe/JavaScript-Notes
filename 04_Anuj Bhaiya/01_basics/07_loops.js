//! (1) for-loop   //
// Example.1
for (let i = 0; i <= 5; i++) {
  console.log("Yodha", i);
}

// Example.2
for (let i = 1; i < 10; i = i + 2) {
  console.log("Ankit", i);
}

//! (2) While-loop (first check the condition if the condition is true then code is executed otherwise exit)
let step = 0;
while (step < 5) {
  console.log("Namaste!", step);
  step++;
  // step += 1   // same as above line
}

// (3) do-while loop (run atleast one time either the condition is true or false)
let num = 0;
do {
  console.log("Number", num);
  num += 2;
} while (num <= 10);
