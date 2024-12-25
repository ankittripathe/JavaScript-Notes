// Chapter 2

// (1) Use logical operator to find whether the age of a person lies between 10 & 20 ?
// let age = prompt("What is your age?");
// age = Number.parseInt(age);     // console me prompt use hota hai  


let age = 66;
if (age > 10 && age < 20) {
  console.log("Your age lies in between 10 and 20");
} else {
  console.log("your age does not lies between 10 and 20");
}
// prompt wala value vs-code me nhi run hoga so use console browser 


// (2) Demnonsterate the use of switch case statements  in javascripts
// let ages = prompt("What is your Ages");

let ages = 14;
switch (ages) {
  case 12:
    console.log("Your ages is 12");
    break;
  case 13:
    console.log("Your ages is 13");
    break;
  case 14:
    console.log("Your ages is 14");
    break;
  case "15":
    console.log("Your ages is 15");
    break;
  default:
    console.log("Your ages not found");
}


// (3) Write a program to find whether a number is Divisible by 2 and 3.
// let num = prompt("Input your number ");

let num = 30
if (num % 2 == 0 && num % 3 == 0) {
  console.log("Your number is Divisible by 2 and 3");
} else {
  console.log("Your Number is not divisible by 2 and 3 ");
}

// (4) write  a javascripts program to find whether a number is Divisible by either 2 or 3
// let numb = prompt("Input your number ");

let numb = 15
if (numb % 2 == 0) {
  console.log("Your number is Divisible by 2");
} else if (numb % 3 == 0) {
  console.log("Your number is Divisible by 3");
} else {
  console.log("Your Number is not divisible by 2 or 3 ");
}

// (5) Print "You can Drive" or "You can't Drive" based on age being greater than 18 using ternary operaor
let umar = 20;
console.log(umar > 18 ? "You can Drive" : `You can't Drive`);
