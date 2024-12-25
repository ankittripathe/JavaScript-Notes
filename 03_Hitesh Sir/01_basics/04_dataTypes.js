/* Data types
  (1) primitive data types => number, string, boolean, undefined, null, bigInt, symbol
  (2) Non primitive (Reference) data types  => object{}, Array [], function (), Date()
  */

/* 
 ? (1) Primitive data Types
   Aisi value jinko copy karo toh copy ho jaye aur change karne par shirf us mein changes ho, 
   aisi value primitive kahlaati hai.


  ? Condition
  (1) They represent single values:- In simple agar bracket nhi hai toh primitive data types hoga.
  (2) Primitives are immutable, which means that once they are created, they cannot be changed.
  (3) They are stored directly in the memory, and operations on them typically produce a new value rather than modifying the original one.
  
   JavaScript supports the following primitive data type
   (1) Number
   (2) String 
   (3) boolean
   (4) undefined
   (5) null
   (6) bigInt
   (7) Symbol
*/

//! Primitives are immutable, which means that once they are created, they cannot be changed.
// Example.1
let number = 10;
number = 20; // number is now 20
console.log("number =", number);

// In this example, the value of "number" is changed from 10 to 20. However, this does not change the value of the primitive itself, but rather creates a new primitive with the value of 20.

// Example.2
var x = 10;
var y = x;
console.log("x =", x); // x => 10
console.log("y =", y); // y => 10

x = x + 2;
console.log("x =", x); // x => 12
console.log("y =", y); // y => 10

//? Primitive Data Types //
// (1) Number:-
// Example.1
let age = 18;
console.log(age); // output: 18

console.log(typeof age); // output: number
console.log(typeof 18); // output: number

// Example.2
let decimal = 3.14
console.log(decimal);        // output: 3.14
console.log(typeof decimal); // output: number



// (2) String:-  //? String are either in single quotes('') or in double quotes(" ") //
// Example.1
let name = "Ankit";
console.log(name); // output: Ankit
console.log(typeof name); // output: string
console.log(typeof "Ankit"); // output: string



// (3) boolean:-    //? Either ture or false value //
// Example.1
let x = true;
console.log(x); // output: true
console.log(typeof x); // output: boolean

// Example.2
let y = false;
console.log(y); // output: false
console.log(typeof true); // output: boolean



// (4) BigInt:-
let num = BigInt("123456789012345678901234567890"); //? Number is too long //
console.log(num);
console.log(typeof num); // output: bigInt



// (5) Undefined:-
// Example.1
let car;
console.log("car =", car); // output: undefined
console.log(typeof car); // output: undefined

//Example.2
let bike = undefined;
console.log("bike=", bike); // undefined
console.log(typeof bike); // undefined

// (6) null:-
let n = null;
console.log(n); // output: null
console.log(typeof n); // output: object

// (7) symbol:-
let mySym = Symbol("113");
console.log(mySym); // output: Symbol(113)
console.log(typeof mySym); // output: Symbol


/*
 ? (2) Reference data Types (Non- primitive) => [], (), {}
   Aisi value jinko change karne par copy ki jagah reference pass ho jaye aise value kehlaati hai reference values.
   (In simple reference data types bracket me hi hoga hamesha  =>  [], (), {})

   ? conditions
   (1) Reference data Types are mutable, which means that they can be changed after they are created.
   (2) stored as references in memory
   (3) Some refernce data Types are:- object{}, Array[], function(){}, Date()
   [] => array.
   {} => object.
   () => function.

*/


//? (1) objects:- are mutable, which means that they can be changed after they are created.
// Example.1
let obj = { name: "John", age: 30 };
obj.age = 31; // the age property of obj is now 31
console.log(obj);

// In this example, the "age" property of the "obj" object is changed from 30 to 31. This changes the value of the object itself, rather than creating a new object.


// Example.2
const person = { firstName: "John", lastName: "Doe" };
console.log(person); // output: { firstName: "John", lastName: "Doe" }
console.log(typeof [person]); // output: object

//? (2) Array object
const cars = ["Saab", "Volvo", "BMW"];
console.log(cars); // output: ["Saab", "Volvo", "BMW"];
console.log(typeof cars); // output: object

cars[-1] = "baleno"; // ab dekho pata lagea ki Array ko object Q bolte hai
console.log(cars); // output: [ 'Saab', 'Volvo', 'BMW', '-1': 'baleno' ]

//! Notes: const ka value primitive data types me change nhi hota hai but, In Non-primitive(reference) data types const ka value change kr skte hai (see above)

// Example
const brand = ["acer", "msi", "dell", "lenavo"];
console.log("brand =", brand);

// acessing value
console.log(brand[1]); // output: msi

// changing value
brand[1] = "asus";
console.log(brand[1]); // output: asus

console.log("brand =", brand); // output: [ 'acer', 'asus', 'dell', 'lenavo' ]

//! In Array counting start form index = 0

//? Date object:
const date = new Date("2022-03-25");
console.log(date);
console.log(typeof date); // object

/*Important  Notes 
 Primitive data Types 
(1) number => 2 to power 53 
(2) string => '' or " "
(3) boolean => true /false
(4) null => standalone value 
(5) undfined =>  value not defined
(6) bigint 
(7) symbol => unique 
*/


/* Some Examples */
console.log(typeof 100); // number
console.log(typeof "Ektu"); // string
console.log(typeof ""); // string
console.log(typeof `ankit`); // string
console.log(typeof true); // boolean
console.log(typeof null); // object
console.log(typeof {}); // object
console.log(typeof []); // object

console.log(typeof undefined); // undefined
console.log(typeof null); // object
