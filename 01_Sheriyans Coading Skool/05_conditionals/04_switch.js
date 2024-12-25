// Switch statement => The "switch" statement in JavaScript is another control structure that allows you to execute a different block of code depending on a specific value. It is often used as an alternative to the "if-else ladder" when you have multiple conditions to check against a single value.

/* Syntax
switch (expression or key) {
    case value1:
       /// code to be executed if expression == value1
      break;
    case value2:
      /// code to be executed if expression == value2
      break;

    default:
      /// code to be executed if expression does not match any of the values
  }
*/

// Example.1
let x = "apple";
switch (x) {
  case "apple":
    console.log("x is an apple");
    break;
  case "banana":
    console.log("x is a banana");
    break;
  case "orange":
    console.log("x is an orange");
    break;
  default:
    console.log("x is something else");
}
// output: x is an apple

// Example.2
let lang = "React";
switch (lang) {
  case "React":
  case "NextJs":
    console.log("frontEnd frameWork or library");
    break;
  case "ExpressJs":
  case "django":
  case "srpingboot":
    console.log("backEnd frameWork or library");
    break;

  default:
    console.log("Error 404 file not found");
}
// output:frontEnd frameWork or library

// Example.3
function handleDay(day) {
  switch (day) {
    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
    case "Friday":
      console.log("It's a weekday.");
      break;

    case "Saturday":
    case "Sunday":
      console.log("It's the weekend!");
      break;

    default:
      console.log("Invalid day");
  }
}

// function call
handleDay("Wednesday"); // Output: It's a weekday.
handleDay("Sunday"); // Output: It's the weekend!
handleDay("Funday"); // Output: Invalid day


// Example.4
const store = (festival) => {
  switch (festival) {
    case "diwali":
      console.log("festival of Deep / Light");
      break;

    case "Dashain":
      console.log("festival of Ma Durga");
      break;

    case "Bhai Tika":
    case "Raksha Bandhan":
      console.log("festival of Bhai Behan");
      break;

    default:
      console.log("not celebrated");
      break;
  }
};
store('Raksha Bandhan')  // output: festival of Bhai Behan
console.log(store());    // output: not celebrated, undefined 



