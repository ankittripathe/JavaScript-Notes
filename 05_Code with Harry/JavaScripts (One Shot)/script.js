//! (1) Ways to print in javascripts  //
// console.log("hello world");
// alert("Javascripts");
// document.write("hello world");
// confirm("Login in to Facebook");
// prompt("Please enter your name", " ");


//! (2) Javascripts console API(Application Programming Interface) //
// console.log("Hello jee , Hello World");
// console.warn("This is warning");
// console.error("This is error");


//! (3) Javascripts Variables  //
// What are Variables ? - like a container to store values of data

// (a) var => can be re-decleared & updated
var num1 = 34;
var num2 = 100; // var can be re-decleared
console.log(num1 + num2); // output:- 134

num1 = 44; // var can be updated as well
console.log("num1 =", num1); // output:- num1 = 44

// (b) let => con't be re-decleard but can be updated
let name = "Ankit";
// let name = 'Amar'  // through error because let can't be re-decleared
name = "Dhoni"; // can updated only
console.log("name =", name); // output:- name = Dhoni


//! (4) Data Types in Javascripts  //
/* There are two types of data types in javaScripts 
 (1) Primitive data types:- number, string, boolean, undefined, null, symbol
 (2) Reference data types:- object, Array, date, function
*/

//! (1) Primitive Data Types
/* (a) Number */
// Example.1
let num = 101;
console.log("num =", num); // output:- 101
console.log(typeof num); // output:- number

// Example.2
let m = 11;
console.log(m); // output: 11
console.log(typeof m); // output:- number

/* (b) string  */
// Example.1
let str1 = "This is a String in Double comma";
console.log("str1 =", str1);
console.log(typeof str1); // output:- string

// Example.2
let str2 = "This is a String in single comma";
console.log("str2 =", str2);
console.log(typeof str2); // output:- string

// Example.3
let str3 = `This is also string using template literal or back-ticks introduce in ES-6`;
console.log("str3 =", str3);
console.log(typeof str3); // output:- string

// Example.4
let name1 = "Ankit";
console.log(name1); // output:- Ankit
console.log(typeof name1); // output:- string

/*  (c) Booleans */
// Example.1
var a = true;
console.log(a); // output:- true
console.log(typeof a); // output:- boolean

// Example.2
var b = false;
console.log(b); // output:- false
console.log(typeof b); // output:- boolean

/* (d) undefined */
// Example.1
let world = undefined;
console.log(world); // output:- undefined
console.log(typeof world); // output:- undefined

// Example.2
let und;
console.log(und); // output:- undefined
console.log(typeof und); // output:- undefined

/* (e) null => standalone value */
let n = null;
console.log("n =", n); // output:- null
console.log(typeof n); // output:- object

/* (f) object */
let details = {
  name: "Ankit",
  age: 25,
  grade: "8 cgpa",
};
console.log(details); // output:- { name: 'Ankit', age: 25, grade: '8 cgpa' }
console.log(typeof details); // output:- object

//! (2) Reference Data Types
// Example.1
let array = [1, 2, 3, 4, 5]; // counting start form  index = 0
console.log(array); // output:-  [ 1, 2, 3, 4, 5 ]
console.log(array[1]); // output:- 2

// Example.2
var arr = [1, 2, 3, "love", 5];
console.log(arr[3]); // output:- love


//! (5) Operator in JavaScripts  //
/* (1) arithmatic operators  */
let x = 100;
let y = 10;
console.log("value of x + y =", x + y); // output:- 110
console.log("value of x - y =", x - y); // output:- 90
console.log("value of x * y =", x * y); // output:- 1000
console.log("value of x / y =", x / y); // output:- 10

/* (2) assignment operator */
let k = 7;
// k = k+2
k += 2;
console.log(k); // output:- 9

k -= 2;
console.log(k); // output:- 7

k *= 2;
console.log(k); // output:- 14

k /= 2;
console.log(k); // output:- 7

/* (3) comparison operators  */
let x1 = 34;
let y1 = 56;
console.log(x1 == y1); // output:- false
console.log(x1 >= y1); // output:- false
console.log(x1 <= y1); // output:- true
console.log(x1 > y1); // output:- false
console.log(x1 < y1); // output:- true

/* (4) Logical Operators */
//! (a) Logical And (&&) => All condition must be true
console.log("true && true =", true && true); // output:- true
console.log(true && false); // output:- false
console.log(false && true); // output:- false
console.log(false && false); // output:- false

//! (b) Logical OR (||) => If any condition is true then it gives true
console.log(true || false); // output:- true
console.log(true || true); // output:- true
console.log(false || true); // output:- true
console.log(false || false); // output:- false

//! (c) Logical NOT (!) => convert true into false & false into true
console.log(!true); // output:- false
console.log(!false); // output:- true


//! (6) DOM Manipulation (Document Object Model)   //
// (a) Selecting Elements by Id
let btn = document.getElementById("btnOne");
console.log("btn =", btn);
// styling
btn.style.height = "5vh";
btn.style.width = "7vw";

function clicked() {
  console.log("button was clicked");
  alert("button was clicked");
}

//! intresting
window.onload = function () {
  console.log("The doucument was loded");
};

// (b) Selecting Elements by className
let divs = document.getElementsByClassName("container");
console.log("divs =", divs);
divs[0].style.background = "lightgreen";
divs[0].style.textAlign = "center";

// (c) Selecting Elements by using querySelector
let sel = document.querySelector(".container");
console.log(sel);

// (d) Selecting Elements by using querySelectorAll
let selAll = document.querySelectorAll(".container");
console.log(selAll);


//! (8) Events in JavaScripts  //
// First container
const container1 = document.querySelector("#firstcontainer");
console.log("container1 =", container1);

container1.addEventListener("click", function () {
  console.log("click on Container 1st");
});

// Second container
const container2 = document.querySelector("#secondcontainer");
console.log("container2 =", container2);

container2.addEventListener("mouseover", () => {
  console.log("Mouse hover on Container 2nd");
});

container2.addEventListener("mouseout", () => {
  console.log("Mouse out of Container 2nd");
});

// Third container
const container3 = document.querySelector("#thirdcontainer");
console.log("container3 =", container3);

container3.addEventListener("mouseup", (evt) => {
  console.log(evt.type);
});

// Fourth container
const container4 = document.querySelector("#fourthcontainer");
console.log("container4 =", container4);

container4.addEventListener("mousedown", (event) => {
  console.log(event.type);
});


//! (8) Function in JavaScripts //
// (a) Normal Functions
function sum(a, b) {
  return a + b;
}
console.log(sum(10, 10)); // output:- 20

// (b) Arrow function
let final = (a, b) => {
  sum = a + b;
  return sum;
};
console.log("final =", final(90, 1)); // output:- 91


//! (9) SetTimeout and setinterval //
const logkaro = () => {
  console.log("I am setTimeout & setInterval");
  document.querySelectorAll(".container")[1].innerHTML = "<b>Set interval</b>";
};

// setTimeout(logkaro, 2000);         // execute in 2 second one time
// setInterval(logkaro, 2000);        // execute after 2 sec non-stop
// clr = setInterval(logkaro, 2000);
// clearInterval(clr)                 // clear setInterval


//! (10) JavaScripts LocalStorage  //
/* 
 (1) localStorage.setItem() => Used to store data in the local storage. 
 It takes two arguments:
'name': The key. This is the name under which the value is stored in the local storage.
'Ankit': The value. This is the data you want to store. It can be a string, number, or other data types (but it will always be stored as a string).

For Example => localStorage.setItem("name", "Ektu");
*/
const store = localStorage.setItem('name', 'love')
console.log(store);

// (2) localStorage.getItem("name") => used to retrieve data from the local storage.
let storedName = localStorage.getItem("name");
console.log(storedName); // output: 'love'

// (3) localStorage.removeItem('name') => used to remove a specific item from local storage.
localStorage.removeItem('name');

let removedName = localStorage.getItem("name");
console.log('remoed ho gaya =', removedName);  // output: null

// (4) localStorage.clear() => removes all items from local storage.
localStorage.clear();
console.log(localStorage.getItem('name'));  // Output: null (since all storage is cleared)


//! (11) JSON (JavaScrits Objects Notation)  //
// Example.1
let obj = { name: "Ankit", age: 25 };
console.log(typeof obj);        // output:- object
console.log(obj);               // output:- {name: 'Ankit', age: 25}

// Converting JavaScript Object to JSON (String)
// (1) JSON.stringify() is a built-in JavaScript function that converts a JavaScript object into a JSON-formatted string.
// (2) In this case, obj (a JavaScript object) is passed as an argument to JSON.stringify(). This method will:Convert the object into a string that follows the JSON format.
// (3) The resulting JSON string can be used to transmit data to a server, store it, or work with it in text-based formats.

let convertedTojson = JSON.stringify(obj);
console.log(typeof convertedTojson);    // output:- string
console.log(convertedTojson);           // output:- {"name":"Ankit","age":25}


// Example.2
const employeeDetails = {
  name: 'Ankit',
  age: 25,
  role: 'SDE-I'
}
console.log(typeof employeeDetails);
console.log(employeeDetails);

// converting to JSON format
const changeFormat = JSON.stringify(employeeDetails)
console.log(typeof changeFormat);
console.log(changeFormat);


//! (12) date & Time
const myDate = new Date();
console.log(myDate);
console.log(myDate.getTime());
console.log(myDate.getDay());
console.log(myDate.getMinutes());
console.log(myDate.getHours());
console.log(myDate.getFullYear());

