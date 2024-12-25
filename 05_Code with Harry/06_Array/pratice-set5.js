// (1) Create an Array of numbers & add number to this Array
let arr = [1, 2, 3];
arr.push(100);
console.log(arr);

// (2) keep adding numbers to the Array in 1 until 0 is added to the Array
/*
let array = [1, 2, 3];
let a;
do {
  a = prompt("enter the number");
  // a  = parseInt(a) //E vi number me change krne ka Ek tarika  hai
  a = Number(a); // prompt hamesha string type value deta hai. Number me change krne ka tarika
  array.push(a);
} while (a != 0);
console.log(array);
*/


// (3) filter for number divisible by 10 fron a given array
let arry = [1, 2, 30, 4, 50, 6, 7, 100, 670];
let newArray = arry.filter((value) => {
  return value % 10 == 0;
});
console.log(newArray);


// (4) Create an Array of Square of given numbers
let num = [3, 4, 5, 6];
let newNum = num.map((value) => {
  return value * value;
});
console.log(newNum);


/* (5) Use reduce to calculate factorial of a given number from an Array of 
  first n natural numbers (n being the number whose factorial needs to be calcuated)
  */
let aaray = [1, 2, 3, 4, 5];
let newArr = aaray.reduce((x1, x2) => {
  return x1 * x2;
});
console.log(newArr);
