// Switch Statement //
// Example.1
let grade = "B";

switch (grade) {
  case "A":
    console.log("Very Good");
    break;

  case "B":
    console.log("Good");
    break;

  case "C":
    console.log("Fair");
    break;

  case "D":
    console.log("Bad");
    break;

  default:
    console.log("Not Found");
}

// Example.2
let grades = "D";

switch (grades) {
  case "A":
    console.log("Very Good");
    break;

  case "B":
    console.log("Good");
    break;

  case "C":
    console.log("Fair");
    break;

  case "D": // can put multiple condition as Well.
  case "E":
    console.log("Bad");
    break;

  default:
    console.log("Not Found");
}
