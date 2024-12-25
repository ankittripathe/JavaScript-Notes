//! Break Statement => if the condtion match stop immediately there  //
let i = 0;
while (i < 6) {
  if (i === 3) {
    break;
  }
  console.log(i);
  i++
}


//! Continue Statement //
let step = 0;
while (step < 5) {
  step++
    if (step == 2) {
    continue;
  }
  console.log("step", step);

}
