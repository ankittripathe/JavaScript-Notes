//! Notes: A variable can be used before it has been declared. (varibale ko banana se pahle usko use kr skte hai)
// Hoisting: varible & function are hosited which means their declaration is moved on the top of the code.

// Example.1
console.log(a);    // output:- undefined
var a = 10;

/*
Notes: upar ka code aaise hi convert ho jata hai but (maan me soch loo). var a = 10 ko decode krnege toh
decleration (var a) wala part top of code me chala jata hai. Aur initalization (a = 10) wala part ohi rah jata hai. Example kr diya gaya hai neeche

var a;   
console.log(a)     // output: undefined esliye hoga
a = 10;
*/


// Example.2   
console.log(num1);
var num1;                        //  this will moved on the top of the code (apne maan me soch loo )
num1 = 100



//! Normal function
// Hoisting: normal function me hota hai. So upar ya niche kahi se vi function ko call kr skte hai

// Example.1
console.log(addOne(99));  // yahi vi function call kr skte hai bcz in normal function hoisting is allowed

function addOne(num) {
  return num + 1;
}
// console.log(addOne(99));   // yahi vi function call kr skte hai


// Example.2
Sum(77);     // function call here because hoisting are allowed in normal function
function Sum(num) {
  console.log(num);
}


//! Expression function
// Hoisting: Expression function me hoisting nhi hota hai toh esliye function call Niche se hi krna hoga

// Example.1
// console.log(addTwo(10));     // error because hoisting are not allowed in expression function.
const addTwo = function (num) {
  return num + 2;
};
console.log(addTwo(55));


// Example.2
// console.log(userDetails ({name:'Ankit', role:'developer'}));   // exp function me hoisting not allowed
const userDetails = function(anyObject){
  return (`UserName = ${anyObject.name} & Role = ${anyObject.role}`)
}
console.log(userDetails ({name:'Ankit', role:'developer'}));


