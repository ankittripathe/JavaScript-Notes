// Conditional statement
// if else, else if,

// let age = prompt("Hey what's your age");    // prompt always gives ouput as string type
// age = Number.parseInt(age);      // converting string to number

// (1) if statement
let ages = 10;
if (ages >= 18) {
  console.log("you can vote");
} else {
  console.log(`you can't vote`);
}

// (2) else-if statement
// Example 1
let age = 10;
if (age < 0) {
  console.log("Invalid age");
} else if (age < 9) {
  console.log("You are a kid");
} else if (age < 18 && age >= 9) {
  console.log("Not a kid");
} else {
  console.log("You are adult");
}

// Example 2
let time = 17;
if (time <= 12) {
  console.log("Good morning");
} else if (time <= 15) {
  console.log("Good Afternoon");
} else if (time <= 18) {
  console.log("Good evening");
} else {
  console.log('Good Night');
}

// Switch Statement
const expr = "Papayas";
switch (expr) {
  case "Oranges":
    console.log("Print Oranges");
    break;

  case "Mangoes":
    console.log("Print Mangoes");
    break;

  case "Papayas":
    console.log("Print Papayas");
    break;

  default:
    console.log("Sorry Not found");
}


//  Ternary Operator
// Example 1
let marks = 33;
console.log(marks > 32 ? "passed" : "failed")

// Example 2
let score = 60
let result  = score >= 60 ? 'first division': 'second divion'
console.log(result);

