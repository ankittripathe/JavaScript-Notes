/* Data types
  (1) primitive data types => number, string, boolean, undefined, null, bigInt, symbol
  (2) Non primitive (Reference) data types  => object{},  Array [],  function ()
  */

/*
 Primitive data Types 
 1. number
 2. string
 3. boolean
 4. BigInt
 5. Symbol
 6. null
 7. undefined
 */

//  (1) number
let a = 100;
console.log(a);
console.log(typeof a);

// (2) string
let b = "Ankit";
console.log(b);
console.log(typeof b);

// (3) boolean
let c = true;
console.log(c);
console.log(typeof c);

// (4) BigInt
let d = BigInt("123833383");
console.log(d);
console.log(typeof d);

// (5) Symbol
let e = Symbol("I am a nice symbol");
console.log(e);
console.log(typeof e);

// (6) null
let f = null;
console.log(f);
console.log(typeof f);

// (7) undefined
let g = undefined;
console.log(g);
console.log(typeof g);

let h;   // this is also undefined
console.log(h);
console.log(typeof h);

/* 
 Non-primitive (Reference) data Types
 1. object {}
 2. Array []
 3. functin ()
*/


// (1) pure object {}
const details = {
  name: 'Ankit',
  age: 24,
  married: false,
};
console.log(details);          // output: {name: Ankit, age: 24, married: false}
console.log(typeof details);   // output: object

console.log(details["name"]);  // output: Ankit
console.log(details['age']);   // output: 24


// (2) Array object
const cars = ["Saab", "Volvo", "BMW"];
console.log(cars);               // output: ["Saab", "Volvo", "BMW"];
console.log(typeof cars);        // output: object

cars[-1] = 'baleno'        // ab dekho pata lagea ki Array ko object Q bolte hai 
console.log(cars);         // output: [ 'Saab', 'Volvo', 'BMW', '-1': 'baleno' ]


//! Notes: const value can't change in primitive data types. But in Non-primitive(reference) data types const value can change.
