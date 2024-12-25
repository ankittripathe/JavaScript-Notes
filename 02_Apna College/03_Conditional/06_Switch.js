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
const exp = "Mango";
switch (exp) {
  case "Mango":
    console.log("Price of mango is 100/kg");
    break;
  case "Papaya":
  case "Grapes":
    console.log("Price of Papaya & Grapes is 200/kg");
    break;
  default:
    console.log(`Sorry we are out of ${exp}.`);
}
// output:- The price of mango is 100/kg

// Example.2
let name = "Ankit";
name = "Raina";
switch (name) {
  case "Ankit":
    console.log("Ankit is Winner");
    break;
  case "Aadhya":
    console.log("Aadhya is Winner");
    break;
  default:
    console.log("None of them are Winner");
}
// output:- None of them are Winner

// Exmaple.3
let game = "chess";
switch (game) {
  case "cricket":
    console.log("Outdoor game");
    break;

  case "chess":
    console.log("Indoor Game");
    break;

  default:
    console.log("Not a Game");
}
// output:- Indoor Game


// Example.4
let score = 101;
switch (score) {
  case 33:
    console.log("your Score is 33");
    break;

  case 100:
  case 200:
    console.log("Centurien");
    break;

  default:
    console.log("Result Not found");
}
// output:- Result Not found


// Example.5
const number = 80;
switch(number){
  case 90: console.log('grade A')
  break;
  case 80: console.log('grade B');
  break;
  case 60: console.log('grade C')
  break;
  case 30: console.log('grade F');
  break;
  default: console.log('Error');
}