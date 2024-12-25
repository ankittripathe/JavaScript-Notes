//! (1) Difference between let, var & const //

// (1) ES5 => var
// (2) var (ES5) old js mein tha.
// (3) var global scoped hota hai.
// (4) var function scoped hota hai => var apne parent function mein kahi vi use ho skta hai.
function abcd() {
  for (var i = 1; i <= 5; i++) {
    console.log("i =", i);
  }
  console.log("i =", i);
}
abcd();

// js language mein kuch cheeje nhi hai jo hum use kar skte hai aur wo cheeje hume JS se nhi balki browser se milti hai, aise saare features jo JS ka part nahi hai but phir bhi hum use kar sakte hai unhe hum dhoond sakte hai ek particular object mein jiska naam hai window.
// window ka part  => alert , prompt , console .......

// (5) var add itself to the window object.
var a = 10;
var b = 20;
//open browsre console me =>  window type kro see ( a = 10 , b = 20 dikega ) window object me


// (1) ES6 => let, const
// (2) let const (ES6) new js mein hai
// (3) let braces scoped hota hai
function xyz() {
  for (let i = 1; i <= 5; i++) {
    console.log(i);
  }
  //   console.log(i);   //this will through error i => not defined
}
xyz();

// (4) let doesn't add itself to the windows object
let m = 10;
let n = 20;



//! (2) HEAP Memory //

/* 
  Heap memory =>
  Jitne bhi variables ya data hum banaate hai unhe store kahi to krna padta hai uske liye hota hai heap memory.
  for eg. => 1+2+3+4+5 
  (heap memory me intermediate data store hota hai aur final answer hmko print hote dikh jaega).
*/

/* 
1+2 = 3      
3+3 = 6        baki sare intermediate data hai 
6+4 = 10
10+5 = 15
final ans  = 15 will print 
*/

//! (3) Execution context //
/* Execution context=> execution context is a container where a function's code is executed and it's  created whenever a function is  called.It contains 3 things below.
1. variables 
2. function 
3. lexical environment  of that function
*/

/* execution context matlab jab bhi ham function chalaayenge function apna Ek khudka EK imaginary container(dabaa) bana lega jismein uski teen cheeje hongi.
1. variables
2. functions inside that parent function
3. lexical environment  of that function
ye jo container hai imaginary ise hi hum execution context kahte hai
*/

function abc() {
  var a = 100;
  function def() {
    var b = 200;
  }
}
abc();

/* lexical environment hota hai ek chart jisme ye likha hota hai ki aapka particular function
   ki cheeje ko access kar sakta hai and kinko nahi, matlab ki it holds it's scope chain.
*/


//! (D) Non-Primitive(Reference) => [], (), {}
// aisi koie vi value jisko copy krne par real copy ho jaaye wo value primitive type value hota hai.
//(matlab agar Array1 me change krenge toh  Array2 me vi change hoga )

// shirf ek me change krne ke liye (...dot)spread operator ka use hota hai. jo ki primitive ki tarah behave krwane lagega.

var a = [1, 2, 3, 4, 5];
var b = a;
console.log(a); // a = [1, 2, 3, 4, 5]
console.log(b); // b = [1, 2, 3, 4, 5]
a.pop();
console.log("a =", a); // a = [1, 2, 3, 4]
console.log("b =", b); // b = [1, 2, 3, 4]

//How to copy reference value  (matlab agar "a"  me change kre toh "a"  me hi ho  "b" wale me nhi hoga )

// Example 1. using Array
var arr1 = [1, 3, 5, 7, 9];
var arr2 = [...arr1];
// ...dot ko spread operator bolte => spread operator ka matlab hota hai ki Arr1 ki sari value Arr2 me copy kro

console.log("Array1", arr1); // arr1 = [1, 3, 5, 7, 9]
console.log("Array2", arr2); // arr2 = [1, 3, 5, 7, 9]
arr2.pop();
console.log("Array1", arr1); // arr1 = [1, 3, 5, 7, 9]
console.log("Array2", arr2); //

// Example.2 Using Object
var obj1 = { name: "Ankit", age: 24 };
var obj2 = { ...obj1 }; // {...obj1} using spread operator in Object as well.

console.log("obj1", obj1); // obj1 = {name:'Ankit', age: 24}
console.log("obj2", obj2); // obj2 = {name:'Ankit', age: 24}

obj1.name = "shivangi";
console.log("obj1", obj1); // obj1 = {name:'Shivangi', age: 24}
console.log("obj2", obj2); // obj2 = {name:'Ankit', age: 24}

// Example.3  Using Object
var student1 = { name: "Aadhya" };
var student2 = { ...student1 }; // {...} using spread operator

console.log("Student1", student1); // student1 = {name:'Aadhya'}
console.log("Student2", student2); // student2 = {name:'Aadhya'}

student2.name = "sadhya";
console.log("Student1", student1); // student1 = {name:'Aadhya'}
console.log("Student2", student2); // student2 = {name:'sadhya'}



//! Truthy & Falsy value  //
// truthy aur falsy => true aur false se alag hai
// js mein kuch vi likho wo maily do prakaar mein se kisi ek prakaar ko belong karti hai => truthy or falsy

// falsy value ye hai => 0, -0, false, '',  undefined , null, NaN, document.all => enko convert kroge tab hamsea false aaega. Eske alawa sari value truthy hai.
//truthy value  = > (-1) vi hai

// Example.1 (Truthy value)
if (7) {
  console.log("Truthy value");
} else {
  console.log("falshy value");
}

// Example.2
if (-1) {
  console.log("Truthy value");
} else {
  console.log("falshy value");
}

// Example.3
if ("Ankit") {
  console.log("Truthy value");
} else {
  console.log("falshy value");
}

// Example (Falshy value)
// Example.1
if (0) {
  console.log("Truthy value");
} else {
  console.log("falshy value");
}

// Example 2
if (null) {
  console.log("Truthy value");
} else {
  console.log("falshy value");
}

// Exmaple 3
if ("") {
  console.log("Truthy value");
} else {
  console.log("falshy value");
}

if (NaN) {
  console.log("Truthy value");
} else {
  console.log("falshy value");
}

//! for Each() loop  //
//for Each loop shirf Aarry pe chalta hai matlab ki jab bhi tumhaare paas Ek array ho, tab us mein kaam aata hai foreach loop
var array = [1, 33, 44, 5, 22, 88, 9];

array.forEach(function (val) {
  console.log(val + 2); // will not modify original Array
});

//! forin() loop  //
// object par loop karne ke liye hota hai forin loop.

var obj = {
  name: "Ankit",
  age: 24,
  city: "Bhairahawa",
};

for (var key in obj) {
  console.log("key =", key, "value =", obj[key]);
  //  console.log(`key = ${key}  value = ${obj[key]}`);
}


/***** (H). callback function {}  ******/
//aaise code jo baad me chalta hai, use ham ek function de deete hai ke bhaiya jab complete ho jaana to ye function chala dena, aur wo function jo hum dete hai wo ek normal function hi hota hai aur use kahte hai callback function.

setTimeout(function () {
  console.log("2 second baad chalaega");
}, 2000);



/***** (I). first class function {}  ******/
// js mein ek concept hai jisko matlab hota hai aap function ko use kar sakte ho as a value.

function demo(arg) {
  arg();
}
demo(function(){console.log("hello jee")});


/***** (J). how array are made behind the scenes.  ******/
var arr = [22, 55, 66, 88];
console.log(typeof arr); //object
arr[-1] = 100;
console.log(arr);

//upar wala  Array aaise convert hota hai object me (=> Esiliye type of krne pe object batata hai.)
//upar neagtive value add krne pe pata chalega console me aaise hi dikega -1:100
var arr = {
  0: 22,
  1: 55,
  3: 66,
  4: 88,
};
console.log(arr);

//Aise pata chaelga ki Array kaunsa hai aur Object kaunsa hai.
console.log(Array.isArray([]));
console.log(Array.isArray({}));

/********** (K).how to delete object propertis ***********/

var details = {
  name: "ankit",
  age: 26,
  city: "london",
};
console.log(details);

delete details.age;
delete details.city;
console.log(details); //age, city => hat gaya hoga
