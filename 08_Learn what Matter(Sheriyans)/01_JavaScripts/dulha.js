/**** (1). Word vs Keyword *****/
// Anything which does not have meaning in their language is => word
// chacha, bhaiya => word
// Anything which have meaning in their language is => keyword
// let, var, const, for, while, if, else.... => keyword


/********************************************/
/**** (2). Vaiable & constant *****/
/****  let , var, const *****/
// code me koie vi data store krne ke liye jiska use hota hai use kahte hai Variable.
var dulha = "Suresh";
var dulhan = "chandani";
console.log(dulha + " weds " + dulhan);
// var can be re-decleared & updated
var dulha = "Akash"; // can redecleared

dulha = "Chandrasekher"; // can updated

console.log(`${dulha} weds ${dulhan}`);
/********************************************/
// const
const dulha1 = "Vivek";
const dulhan1 = "Viveki";
// const dulhan1 = 'sonali'   // const  can't be redecleared  & updated
// dulhan1 = 'Sonali'         // const can't be updated
console.log(`${dulha1} weds ${dulhan1}`);
/********************************************/

/** (3). Hoisting =>vaiable ko bannee ke pahle usse use kr skte hai */
//varibale and function are hoistd which means their decleration is moved on the top of the code
// let aur const me E follow nhi krega=> see Akash saini video
console.log(a); // undefined

var a = 10;
/*
var a;               =>decleration is moved on the top of the code
console.log(a);
a = 10;

var a = 10;
ko hum
var a;
a = 10 likh skte hai
*/
/********************************************/


/***** (4) Types in js *************/
//1.Primitive
//2.Non-Primitive(Reference) = [], (), {}
//Primitive => number, string, boolean, null, undefined, Symbol, BigInt
//aisi koie vi value jisko copy krne par real copy ho jaaye wo value primitive type value hota hai.
//
var x = 12;
var y = x;
console.log("x =", x); //12

console.log("y =", y); //12

y = y + 2;
console.log("x =", x); //12

console.log("y =", y); //14

//Non-Primitive(Reference) => [], (), {}
//aisi koie vi value jisko copy krne par real copy nhi hota , balki us mein usko reference pass ho jata hai, use ham reference value kahte hai.
var m = [3, 7];
var n = m;
console.log("m =", m); //m = [ 3, 7 ]

console.log("n =", n); //n = [ 3, 7 ]

m.pop();
console.log("m =", m); //m = [ 3 ]

console.log("n =", n); //n = [ 3 ]

/********************************************/
/***** (5) Conditional in js *************/
// (a).if statement
// if(true or false ){
//     // true condition
// }else{
//     //false condition
// }


// (b) if else else-if
if (11 > 12) {
    //if ture then executed
} else if (12 > 13) {
    // this executed when condition1 is false and this condition is true.
} else if (14 > 16) {
    // this executed when condition1 & condition 2 is false and this condition is true.
} else {
    // this executed when above all condtion is false.
}

/********************************************/
/***** (6) Loop in js ***********/
// loop ka matlab repeat
//(a). for loop
for (var i = 1; i <= 10; i++) {
    console.log("i =", i);
}

//(b). while loop
// while(true or false){
//     // condition
//     // increment
// }
//Example
let num = 20;
while (num <= 30) {
    console.log("num =", num);
    num++;
}
/***************************************/


/***** (7) Function in js *********/
// function ka matlab aap kuch code likh kar koie naam de skte hoo. aur badd me useee use kr skte ho with  that name as many times.
//function mainly teen kaam ke liye hote hai
//1. Jab aapka code aap turnat nahi chalana chaahte future mein chalaana chaahte ho
function hellobolo() {
    console.log("Hello jee kaise ho sare ");
}
hellobolo(); // function call krenege jab jarurat hoga aur code chal jaega

//2. jab aapka code aap reuse krna chahte ho
function oatsBanoAurKaho() {
    console.log("oats khareedo");
    console.log("banao");
    console.log("kha loo");
}
oatsBanoAurKaho();
oatsBanoAurKaho(); //code resue

//3. jab aap code chalana chaahte ho har baar with different data.
//parameter & arguments use
//Example 1 => single parameters & arguments
function abc(a) {
    console.log("a =", a);
}
// abc('12')
abc(12);
//Example 2 => multiple parameters & arguments
function xyz(num1, num2, num3) {
    //parameters
    console.log("num1 =", num1);
    console.log("num2 =", num2);
    console.log("num3 =", num3);
    console.log(`num1 = ${num1}, num2 = ${num2}, num3 = ${num3}`);
}
xyz(11, 12, 13); //arguments

//arguments =>  real value jo hum dete hai function call  ke time
//parameters => Variables jinme value store hoti hai arguments wali.
/**************************************/


/***** (8) Arrays in js *********/
//Array=> hum ek varibale mein ek value store kr paate hai, par jab hame ek se jada valu store krni ho tab fir use hota hai Array ka , matlab ki array aapko freedom deta hai ek se jada value use krne ki.
// Array => group of values
//Example.1
var fruits = ["apple", "leechi", "mango"];
console.log("fruits =", fruits);
// index in array
console.log(fruits[0]); // 1st Elements => Apple

console.log(fruits[1]); // 2nd Elements => leechi

console.log(fruits[2]); // 3rd Elements => mango

//Example.2
var arr = [10, 77, 111, 11];
console.log(arr);
//(a). push()
var array1 = [1, 10, 11, 100];
array1.push(8); // add one elements at last

// array1.push(8,77)           // add two elements at last
console.log("array1 =", array1);
// (b). pop()
var array2 = [10, 20, 30, 40];
array2.pop(); // remove one elements form last

console.log("array2 =", array2);
// (c). unshift()
var arr1 = ["apple", "ball", "cat"];
arr1.unshift("ape"); // add one elements at starting

// arr1.unshift('ape', 'ant')    // add two elements at starting
console.log("arr1 =", arr1);
// (d). shift()
var arr2 = ["ram", "shyam", "ravi", "kishna"];
arr2.shift(); // remove one elements from starting

console.log("arr2 =", arr2);
// (e). splice()
var arr3 = [3, 4, 5, 6, 7, 8, 9, 10, 11];
arr3.splice(2); // kaha se kitna hatana hai matlab idx = 2 se sara index hata doo

// arr3.splice(2,1)    // kaha se kitna hatana hai matlab idx = 2 se 1 items remove kr doo
// arr3.splice(2,3)    // kaha se kitna hatana hai matlab idx = 2 se 3 items remove kr doo
console.log("arr3 =", arr3);
/******************************************/


/***** (9) Object in js *********/
//Array => Ek se jada bande ki toh huwa Array.
//Object => Ek bande ke baare me saari baat ki toh huwa object.
//Object => Ek bande ki details ko hold krna, in a key value pair is object.
// 1. blank oject
var name = {};
// 2. filled object
var details = {
    name: "Ankit",
    age: 23,
    email: "ankittripathi@gamil.com",
    linkedin: "ankittripathe",
};
//(a). how to access value
console.log(details);
console.log(details.name);
// console.log(details['name']);  // 2nd method
//(b). how update the value
// (updating object Properties)
details.age = 24;
console.log(details);
//(c). how to add new key value pair
details.salary = "45k";
console.log(details);
//(d). how to delete object propertis
delete details.age;
console.log(details); //age hat gaya hoga

//Properties Vs methods in object
var employee = {
    name: "avinash", // this is properties
    age: 25, // this is properties
    salary: "28k", // this is properties
    kuchbolo: function () { }, // this is method => method ka color change rhega properties se
    hello: function () { }, // this is method => method ka color change rhega properties se
};
console.log(employee.kuchbolo);
