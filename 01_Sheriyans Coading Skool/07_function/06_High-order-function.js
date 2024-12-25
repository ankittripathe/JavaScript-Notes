/* High Order Function:- 
   (1) A higher-order function is a function that can take other functions as arguments, return a function, or both.
   (2) Some Example are:- Array methods like map(), filter(), reduce(). forEach() etc

*/

// Example.1
function abcd(callback) {
  callback(); // Using the function passed as an argument
}

abcd(function () {
  console.log("This is a callback function!");
});
// Output: This is a callback function!


// Example.2 (does not modify origainal Array)
let array = [1, 2, 3, 4, 5];
array.forEach((val) => {
  console.log(val * 2);
});
console.log(array);



