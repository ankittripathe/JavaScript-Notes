/*  Syntax of Switch statemant  

switch (){
    case value:
        /// code to br executed
    break;

    default:
        /// code to be executed 
     break;
}

*/

// Example.1
const month = 3; // number
// const month = "feb"     // string

switch (month) {
  case 1:
    console.log("January");
    break;

  case "feb":
    console.log("Febraury");
    break;

  case 3:
    console.log("March");
    break;

  case 4:
    console.log("April");
    break;

  case 5:
    console.log("december");
    break;

  default:
    console.log("default case match");
    break;
}

// Example.2
const role = "react";

switch (role) {
  case "react":
  case "software":                  // can put multiple value
    console.log("react developer");
    break;
  case "nextjs":
    console.log("nextjs developer");
    break;
  case 1:
    console.log("tester");
    break;
  default:
    console.log("No data Found");
    break;
}
