/* Types of Function (6 Ways)
   1. Named Function / Normal Function
   2. Anonymous Function
   3. Arrow Function
   4. Immediate Invoked Function (IIFE)
   5. High Order Function
   6. constructor Function
*/

//! (1) Named Function / Normal Function  //
// Example.1
function sayMyName() {
  console.log("Code");
  console.log("By");
  console.log("Ankit Tripathi");
}
// sayMyName();

// output are:-
// Code
// By
// Ankit Tripathi


// Example.2
function addTwoNumbers(num1, num2) {
  console.log(num1 + num2);
};
// addTwoNumbers();            // output: NaN
// addTwoNumbers(3, 4);        // output: 7
// addTwoNumbers(3, "4");      // output: 34 (concationation rule)
// addTwoNumbers(3, "a");      // output: 3a
// addTwoNumbers(3, null);     // output: 3
// addTwoNumbers(3, true);     // output: 4

const result = addTwoNumbers(100, 5)      // undefined because function doesn't return anything
console.log("Result =", result);                 


// Example.3
function sumOfTwoNum(num1, num2) {
  let sum = num1 + num2;
  console.log("sum =", sum);
  return sum;
  // console.log(sum);  //! Return ke badd koie line nhi print hoga //
}
// const results = sumOfTwoNum(30, 5);
// console.log(results);
// console.log("above code in one line =", sumOfTwoNum(30, 5));


// Example.4
function shortCutMethod(num1, num2) {
  return num1 + num2;
  console.log("print nhi hoga"); //! Return ke badd koie line nhi print hoga //
}
// console.log(shortCutMethod(5, 2));

// Example.5
function loginUserMessage(userName) {
  return `${userName} just logged in`;
}
// let final = loginUserMessage("Dhoni")
// console.log(final);
// console.log(loginUserMessage("Dhoni"));  // above line code in shortcut
// console.log(loginUserMessage());         // undefined => because we are not sending any Name here
// console.log(loginUserMessage(''));       // empty space print  because we are sending here empty string

// Example.6
function loginUser(userName) {
  if (!userName) {
    //true ko => false me aur false ko => true  me convert krega E line ka matlab
    console.log("Please enter a username");
  }
  return `${userName} just logged in`;
}
// console.log(loginUser());
// console.log(loginUser("Ankit"));

// Example.7
function logIn(userName = "Sam") {
  return `${userName} just logged in`;
}
// console.log(logIn());
//! here agruments are not passed. So if there any By-default value in  parameter will take that value otherwise give undefined.
// console.log(logIn("Ankit"));
//! here arguments are passed. So it will overWrite  By-default value present in Parameter and print it.


// Example.8
function calculateCartPrice(...num1) {
  //(...)ka matalb rest operator
  //(jab pata na ho ki kitna agrument value aaega tab rest operator ka use krte hai rest/spread ek hi hai)
  return num1;
}
console.log(calculateCartPrice(200, 300, 400, 500));


// Exmple.9
function addToCart(...items) {
  console.log(items);
  return items;
}
// console.log(addToCart('T-shirt', 'Jeans', 100));


// Example.10
function calculatePrice(val1, val2, ...num1) {
  // return val1 => 200 chala jaega val1 me jo ki print nhi hoga yaha
  // return val2 => 300 chala jaega val2 me jo ki print nhi hoaa yaha
  return num1; //! baki ka rest operator me ...num1 //
}
console.log(calculatePrice(200, 300, 'Mouse', 500, 800));

// Example.11
function Price(num1) {
  return num1;
}
// console.log(Price(200, 300, 400));  //! first wala print hoga baki ka Neglect ho jaega //


//! When we passed object as agruments //
// Example.12
function handleObject(anyObject) {
  console.log(
    `CompanyName is ${anyObject.companyName} & Establishment is ${anyObject.Estd}`
  );
}
handleObject({ companyName: "Amazon", Estd: 1994 });

//! Example.12 (returned typed)
function handleObject(anyObject) {
  return `CompanyName is ${anyObject.companyName} & Establishment is ${anyObject.Estd}`;
}
// console.log(handleObject({ companyName: "Amazon", Estd: 1994 }));


//! Example.12 (another method)
const companyDetails = {
  companyName: "Amazon",
  Estd: 1994,
};

function handleObject(anyObject) {
  console.log(
    `CompanyName is ${anyObject.companyName} & Establishment is ${anyObject.Estd}`
  );
}
// handleObject(companyDetails);

// Example.13
const userDetails = {
  userName: "Ankit",
  jobRole: "Software Engineer",
};

function myData(obj) {
  console.log(`Username = ${obj.userName} & Profile = ${obj.jobRole}`);
}
// myData(userDetails)

//! Example.13 (another method)
function myData(obj) {
  console.log(`UserName = ${obj.userName} $ Profile = ${obj.jobRole}`);
}
// myData({userName: 'Raashi', jobRole: 'React-developer'})

//! When we passed Array as agruments //
// Example.14
const myArray = [200, 99, 400, 1000];

function returnSecondValue(getArray) {
  // return getArray[8];        //! undefined because not present in Array list
  // return getArray['']        //! undefined
  return getArray[1]; // index 2 pe jo present hoga print hoga
}
console.log(returnSecondValue(myArray));

//! Example.14 (Another Method value pass krne ka) //
function returnSecVal(getArr) {
  return getArr[1];
}
console.log(returnSecVal([200, 500, 1000, 400]));
console.log(returnSecVal((Array = [22, 44, 55, 66])));

// Exmaple.15
function items(getItems) {
  console.log(getItems[1]);
}
items(["jacket", "cheater", "hoodies"]);



//! (2) Function Expression
// Exmple.1
const addTwo = function (num) {
  return num + 2;
};
console.log(addTwo(55)); // output: 57

// Exmaple.2
const greet = function (msg) {
  return msg;
};
// console.log(greet());
console.log(greet("Namaste"));

// Exmple.3
const findSquare = function (num) {
  console.log(num * num);
};
findSquare(4)
