// (1) if-else statement  //
let age = 12;
if (age >= 18) {
  console.log("You can vote");
} else {
  console.log("You can't vote");
}
console.log("This will Execute always"); // true ho ya false. This will executed always.

// (2) if-else-if statement  //
let marks = 66;

if (marks > 90) {
  console.log("A+");
} else if (marks > 80) {
  console.log("A");
} else if (marks > 70) {
  console.log("B+");
} else if (marks > 60) {
  console.log("B");
} else {
  console.log("Low marks");
}

// (3) Nested if-else statement //
// Example.1
let ages = 70;

if (ages >= 18) {
  console.log("You can vote");

  if (ages > 60) {
    console.log("You can Vote Again");
  }
} else {
  console.log("You can't vote");
}

// Example.2
let umar = 6;

if (umar >= 18) {
  console.log("You can vote");

  if (umar > 60) {
    console.log("You can Vote Again");
  }
} else {
  console.log("You can't vote");
  if (umar < 10) {
    console.log("You must go to skool");
  }
}

// Example.3
let mark = 68;
if (mark > 80) {
  console.log("Got distinction marks");
  if (mark > 90) {
    console.log("Distinction with Honours");
  }
} else {
  console.log("Passed");
  if (mark > 60) {
    console.log("Passed with 1st Divison");
  }
}

// (4) Ternary operator (Ternary operator is also called => if-else Shorthand)  //
// Example.1
const score = 50;
const result = score >= 32 ? "passed" : "failed";
console.log("You are", result);

// Example.2
let percentage = 55;
percentage > 60
  ? console.log("good marks")
  : console.log("try to get good Marks");
