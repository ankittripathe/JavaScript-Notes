// Types in JS  //

/*  A JavaScript variable can hold any of there 2 type of data.
   (1) Primitive data Types =>
   (2) Reference data Types
*/

/* 
 ? (1) Primitive data Types (stack Memory)
   Aisi value jinko copy karo toh copy ho jaye aur change karne par shirf us mein changes ho, 
   aisi value primitive kahlaati hai.
   (In simple agar bracket nhi hai toh primitive data types hi hoga)

   Defination:
   Primitive data types are the built-in data types provided by JavaScript.
   ? They represent single values and are immutable (change na ho).
   JavaScript supports the following primitive data type
   (1) Number
   (2) String 
   (3) boolean
   (4) undefined
   (5) null
   (6) bigInt
   (7) Symbol

    ? Stack memory:- Used in primitive data Types,
*/

//!  Primitives are immutable, which means that once they are created, they cannot be changed.
// Example.1
let num = 10;
num = 20;     // num is now 20
console.log("num =", num);


// In this example, the value of "num" is changed from 10 to 20. However, this does not change the value of the primitive itself, but rather creates a new primitive with the value of 20.

// Example.2
var x = 10;
var y = x;
console.log("x =", x);  // x => 10
console.log("y =", y);  // y => 10

x = x + 2;
console.log("x =", x); // x => 12
console.log("y =", y); // y => 10


/* JavaScript supports the following primitive data type
   (1) Number
   (2) String 
   (3) boolean
   (4) undefined
   (5) null
   (6) bigInt
   (7) Symbol 
*/

//! (1) Number => number data type in Js can be used to hold decimal values as well as non-decimal values.
// Example.1
let number = 20
console.log(number);        // output: 20
console.log(typeof number); // output: number

// Example.2
let decimal = 3.14
console.log(decimal);        // output: 3.14
console.log(typeof decimal); // output: number

//! (2) String => string data type in Js represents a sequence of characters that are surrounded by single or double quotes.
// Example.1
let str1 = 'hello Ankit'
console.log(str1);       // output: hello Ankit

// Example.2
let str2 = 'Ektu'
console.log(str2);        // output: Ektu
console.log(typeof str2); // output: string


//! (3) boolean =>
// Example.1
let boolean = true
console.log(boolean);       // output: true

// Example.2
let boole = false; 
console.log(boole);         // output: false
console.log(typeof boole);  // output: boolean


//! (4) undefined => a special value that represents an un-initialized variable (value not defined while initalization)
// Example.1
let name;
console.log(name);          // output: undefined
console.log(typeof name);   // output: undefined

// Example.2
let salary = undefined;
console.log(salary);        // output: undefined
console.log(typeof salary); // output: undefined


//! (5) null => a special value that represents an absence of value or no value
// Example.1
let alone = null;
console.log(alone);         // output: null
console.log(typeof alone);  // output: object

//! (6) BigInt => 
// Example.1
let store = BigInt(123333333)
console.log(store);         // output: 12333333n
console.log(typeof store)   // output: bigint

//! (7) Symbol =>
// Example.1
let sym = Symbol(123)
console.log(sym);          // output: symbol(123)
console.log(typeof sym);   // output: Symbol



/*
 ? (2) Reference data Types (Non- primitive) => [], (), {}
   Aisi koie vi value jisko copy krne par real copy ho jaaye wo value reference type value hota hai.
   (matlab agar Array1 me change krenge toh Array2 me vi change hoga )

   Aisi value jinko change karne par copy ki jagah reference pass ho jaye aise value kehlaati hai reference values.
   (In simple reference data types bracket me hi hoga hamesha  =>  [], (), {})

   Defination:
   ? Objects are mutable, which means that they can be changed after they are created.
   There are several other data types in JavaScript that are classified as objects, including arrays, functions, and dates.
   These data types behave similarly to objects in that they are mutable and can be modified after they are created.
   [] => array.
   {} => object.
   () => function.

    ? Heap memory are used:- Non-Primitive 
    ? (Reference):- Ek dusre ko refer krte hai value
    ? Reference milta hai original value me n(Agar ek me change krenge toh dusre me vi change hoga).
*/

//! Objects are mutable, which means that they can be changed after they are created.
// Example.1
let obj = { name: "John", age: 30 };
obj.age = 31; // the age property of obj is now 31
console.log(obj);

// In this example, the "age" property of the "obj" object is changed from 30 to 31. This changes the value of the object itself, rather than creating a new object.


// Example.2
var a = [1, 2, 3, 4, 5];
var b = a;

console.log("a =", a); // a = [1, 2, 3, 4, 5]
console.log("b =", b); // b = [1, 2, 3, 4, 5]

a.pop();
console.log("a =", a); // a = [1, 2, 3, 4]
console.log("b =", b); // b = [1, 2, 3, 4]





