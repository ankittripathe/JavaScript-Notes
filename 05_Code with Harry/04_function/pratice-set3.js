/*
 (1) Write a program to print the marks of a students in an object using for loop
  marks = {ram:99, shyam:20, Sita: 99}
 */

let marks = {
  ram: 99,
  shyam: 20,
  Sita: 99,
};
for (i = 0; i < Object.keys(marks).length; i++) {
  console.log(
    `Marks of ${Object.keys(marks)[i]} : ${marks[Object.keys(marks)[i]]}`
  );
}

// (2) Write  a program in ques1 using for-in loop
for (let i in marks) {
  console.log(`marks of ${i} = ${marks[i]}`);
}

// (3) Write a function to find mean of 3 numbers
function mean(a, b, c) {
  return (a + b + c) / 3;
}
console.log(mean(1, 2, 3));


// (4) Write a program to print "try again" until the user enters the correct number
// let cn = 4;
// let i;
// while (i != cn) {
//   i = prompt("Enter a number ");
//   console.log("Try Again");
// }
// console.log("You have entered a correct number");
