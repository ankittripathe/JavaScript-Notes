//** (1) function statement (normal function /named function) **//
/*  
! (a) Noraml function without argument passed type
?Syntax
function name (){
    console.log('Hello');
}
name()
*/

// Example.1
function sayMyName() {
  console.log("Ankit");
}
sayMyName(); // output: Ankit
sayMyName(); // output: Ankit

// Example.2
function greet() {
  console.log("hello Bolo");
}
greet(); // output: hello Bolo

// Example.3
function check() {
  for (var i = 15; i <= 20; i++) {
    console.log(i, "hello");
  }
}
check();
// output: 15, 16, 17, 18, 19, 20

// Example.4
var dateofBirth = 7;
var todaysDate = 7;

function happyBirthDay() {
  console.log("Happy BirthDay");
}
if (dateofBirth === todaysDate) {
  happyBirthDay();
}
// output: Happy BirthDay

// Example.5
function Name() {
  console.log("CSK");
}
let answer = Name();
console.log(answer); // output: CSK, aur undefined (because it doesn't return anything)

// Example.6
function karodo() {
  console.log("1 crore");
}
console.log(karodo()); // output: 1 crore, undefined (because it doesn't return anything)

/* 
! (b) Normal function with arguments passed type
?Syntax
function name (parameter){
    console.log('Hello');
}
name(agruments)
*/

// Example.1
function sum(a, b) {
  console.log(a + b);
}
sum(20, 10); // output: 30

// Exampple.2
function square(num) {
  console.log(num * num);
}
square(5); // output: 25

// Example.3
function add(val) {
  console.log(5 + val);
}
add(12); // output: 17

// Example.4
function myPrint(msg) {
  console.log(msg);
}
myPrint(); // output: undefined (because function invole/call ke time kuch pass nhi kiya gaya hai)

// Example.5
function myMessage(msg, n) {
  console.log(msg, n);
}
myMessage("loveJs", 100); // output: loveJs 100

// Example.6
function myMessage(msg, n = "language") {
  console.log(msg, n);
}
myMessage("JavaScripts"); // output: JavaScripts language

// Example.7
function laptop(comp = "Acer") {
  console.log(comp);
}
console.log(laptop());
// function call ke time kuch nhi diya gaya hai So By-default wala value le lega. Aur Agar yaah kuch denge toh overwrite kr dega By-default value ko.
// output: Acer, undefined (because it doesn't return anythings)

// Example.9
function addition(x, y) {
  plus = x + y;
}
console.log("output =", addition(10, 100)); // output: undefined (because return kuch nhi ho rha hai)

//! When we passed object as agruments //
// Example.10
function handleObject(anyObj) {
  console.log(
    `CompanyName = ${anyObj.companyName} & Establishment = ${anyObj.Estd}`
  );
}
handleObject({ companyName: "Amazon", Estd: 1994 });
// output: CompanyName = Amazon & Establishment = 1994

// Example.11
function myData(obj) {
  console.log(`UserName = ${obj.userName} $ Profile = ${obj.jobRole}`);
}
myData({ userName: "Raashi", jobRole: "React-developer" });

// Example.12 //!(another method)
const details = {
  userName: "Swati",
  department: "medical",
};

function myData(obj) {
  console.log(`UserName = ${obj.userName}`);
}
myData(details);

// Exmaple.13
function items(getItems) {
  console.log(getItems[1]);
}
items(["jacket", "cheater", "hoodies"]); // output: cheater

// Exmaple.14
function grocery(getItems) {
  console.log(getItems[6]);
}
grocery(["soyabean", "Rice", "Atta"]); // output: undefined

//! Normal function with return Types //
// Example.1
function mobile() {
  return console.log("motorola");
  console.log("stock Android"); //! return ke badd kuch nhi print hoga
}
mobile(); // output: motorola

// Example.2
function cursh() {
  return "Aadhya";
}
console.log(cursh()); // output: Aadhya

// Example.3
function square(x) {
  return x * x;
  console.log("hello"); //! return ke badd kuch nhi print hoga
}
let result = square(5);
console.log(result); // output: 25

console.log("above line of code in single line =", square(5)); // output: 25

// Example.4
function add(x, y) {
  return x + y;
}
console.log(add(99, 1)); // output: 100

// Example.5
function addKaro(m, n) {
  console.log("m =", m, "n =", n); // m & n are defined because of block scope {}
  return (sum = m + n);
}
console.log(addKaro(101, 202)); // output: 303
// console.log(m);     // m is not defined because function have blocked scope {} not global scope

// Example.6
function bank(name = "canara") {
  // By-default parameter
  console.log(name);
  return name;
}
console.log(bank());
// output: canara
// output: canara

// Example.7
function bank(name = "canara") {
  // By-default parameter
  console.log(name);
  return name;
}
console.log(bank("Hdfc"));
// output: Hdfc
// output: Hdfc

// Example.8
function logIn(userName = "Sam") {
  return `${userName} just logged in whats'app`;
}
console.log(logIn()); // output: Sam just logged in whats'app
//! here agruments are not passed. So if there any By-default value in  parameter will take that value otherwise give undefined.

console.log(logIn("Ankit")); // output: Ankit just logged in whats'spp
//! here arguments are passed. So it will overWrite  By-default value present in Parameter and print it.

// Example.9
function loginUser(userName) {
  if (!userName) {
    //true ko => false me aur false ko => true  me convert krega E line ka matlab
    console.log("Please enter a username");
  }
  return `${userName} just logged in`;
}
console.log(loginUser());
// output: please enter a username
// output: undefined just logged in

console.log(loginUser(" ")); // output:   just logged in
console.log(loginUser("Ankit")); // output: Ankit just loged in

// Example.10
function loginUserMessage(userName) {
  return `${userName} just logged in`;
}
let final = loginUserMessage("iphone");
console.log(final); // output: iphone just logged in

// Above line of code in single line
console.log(loginUserMessage("iphone")); // output: iphone just logged in
console.log(loginUserMessage()); // output: undefined just logged in (because we r not sending anything)
console.log(loginUserMessage("")); // empty space print because we are sending here empty string

// Example.11
function Price(num1) {
  return num1;
}
console.log(Price(200, 300, 400));
// output: 200   //! first wala print hoga baki ka Neglect ho jaega //

//Example.12
function fabLang(name) {
  return name;
}
console.log(fabLang("JavaScripts", "TypeScripts", "Python"));
// output: JavaScripts  //! first wala print hoga baki ka Neglect ho jaega //

// Example.13    //! When we passed object as agruments
function handle(anyObject) {
  return `CompanyName = ${anyObject.companyName} & Establishment = ${anyObject.Estd}`;
}
console.log(handle({ companyName: "Amazon", Estd: 1994 }));
// output: CompanyName = Amazon & Establishment = 1994

// Example.14   //! When we passed Array as agruments
function returnSecVal(getArr) {
  return getArr[1];
}
console.log(returnSecVal([200, 500, 1000, 400]));
console.log(returnSecVal((Array = [22, 44, 55, 66])));

// Example.15
const myArray = [200, 99, 400, 1000];

function returnSecondValue(getArray) {
  // return getArray[8];   //! undefined because not present in Array list
  // return getArray['']   //! undefined because not present in Array list
  return getArray[1]; // index 2 pe jo present hoga print hoga
}
console.log(returnSecondValue(myArray)); // output: 99


//! *************** Hoisting in Function  ****************//
// Note: Hoisting is possible in Normal function So function call kahi se vi kr skte hai (upar /niche /beech me)

// Example.1
const a = 11;
const b = 2;
sumOfTwo(a, b); // output: 13  (because hoisting is possible in normal function)

function sumOfTwo(a, b) {
  sum = a + b;
  console.log(sum);
}

// Example.2
greet(); //  output: Hello  (because hoisting is possible in normal function)

function greet() {
  console.log("Hello");
}
// Function declarations are hoisted entirely, meaning you can call them before their actual declaration in the code.


// Example.3
console.log(myWork(9, 9));  // output: 81 (Hoisting is possible in Normal Function)

function myWork(k, l) {
  return k * l;
}


//! **************** Rest operator type function ***********//
// Example.1
function calculateCartPrice(...num1) {
  //(...)ka matalb rest operator
  //(jab pata na ho ki kitna agrument value aaega tab rest operator ka use krte hai rest/spread ek hi hai)
  return num1;
}
console.log(calculateCartPrice(200, 300, 400, 500));
// output: [200, 300, 400, 500]

// Exmple.2
function addToCart(...items) {
  console.log(items);  // output: [ 'T-shirt', 'Jeans', 100 ]
  return items;
}
console.log(addToCart('T-shirt', 'Jeans', 100));
// output: [ 'T-shirt', 'Jeans', 100 ]

// Example.3
function calculatePrice(val1, val2, ...num1) {
  // return val1 => 200 chala jaega val1 me jo ki print nhi hoga yaha
  // return val2 => 300 chala jaega val2 me jo ki print nhi hoaa yaha
  return num1; //! baki ka rest operator me ...num1 //
}
console.log(calculatePrice(200, 300, "Mouse", 500, 800));
// output: [ 'Mouse', 500, 800 ]