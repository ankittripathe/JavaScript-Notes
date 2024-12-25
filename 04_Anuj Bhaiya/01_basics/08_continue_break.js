//! (1) break => if the condition satisfy then stop there (exit from the loop)
let step = 0;
while (step < 5) {
  if (step == 2) {
    break;
  }
  console.log("Namaste!", step);
  step++;
}

//! (2) continue =>
let steps = 0;
while (steps < 5) {
  if (steps == 2) {
    steps++;
    continue;
  }
  console.log("Hello jee", steps);
  steps++;
}
